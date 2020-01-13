from flask import Flask, render_template, make_response, request, jsonify
from flask_api import status
from flask_restful import Api
import networkx as nx
import math
import pandas as pd

# initialize flask app
# build react files to compile build files
app = Flask(__name__, static_folder="../../client/build/static",
            template_folder="../../client/build")

# render index html file
@app.route('/')
@app.route('/about')
@app.route('/guidelines')
def index():
    return render_template('index.html')


# main sorting algorithm, using min cost flow
@app.route('/api/sort', methods=['POST'])
def sortWorkshops():
    # theres no way you can fucking hit these error nessages unless you fuck up the front end code
    # so dont fucking mess that front end code up
    if not request.json or not "rows" in request.json or not "workshopsToAttend" in request.json:
        return jsonify({"error": "HENRY, YOU'RE A FUCKING IDIOT"}), status.HTTP_400_BAD_REQUEST
    matches = []

    seriesdict = {}  # dictionary of prefs for each series
    seriescols = {}  # keeps track of which columns are for which series
    seriesworkshops = {}  # for each series, set of workshops belonging in each
    emails = {}  # keeps track of emails corresponding to each person

    # loop through each row in csv file
    # get data on prefs for each person
    for count, row in enumerate(request.json["rows"]):
        # parse column names in top row
        if count == 0:
            for i in range(3, len(row)):
                seriesdict[row[i].split("[")[0].strip()] = {}
                seriescols[i] = row[i].split("[")[0].strip()

            if len(seriesdict) != len(request.json["workshopsToAttend"]):
                return jsonify({"error": "USE THE FUCKING BUTTONS TO ADD THE RIGHT NUMBER OF SERIES PLZ"}), status.HTTP_400_BAD_REQUEST

        # parse data for each person
        else:
            currname = row[1].strip()
            email = row[2].strip()
            emails[email] = currname
            for i in range(3, len(row)):
                try:
                    seriesdict[seriescols[i]][email].append(row[i].strip())
                except:
                    seriesdict[seriescols[i]][email] = [row[i].strip()]

                try:
                    seriesworkshops[seriescols[i]].add(row[i].strip())
                except:
                    seriesworkshops[seriescols[i]] = set()
                    seriesworkshops[seriescols[i]].add(row[i].strip())

    columns = ["Name", "Email"]
    i = 0  # counter to loop through workshopsToAttend for each series
    personMatches = {}  # dictionary to keep track of what the alogirthm matches

    # loop through each series
    for series in seriesdict:
        # dictionary of prefs, keys: email | values: list of workshops
        prefs = seriesdict[series]

        # list of unique workshops for each series
        workshops = list(seriesworkshops[series])

        # number of workshops to attend for current series
        attend = request.json["workshopsToAttend"][i]

        numPersons = len(prefs)  # number of people
        numWorkshops = len(workshops)  # number of workshops in current series

        # give even number of people per workshop, round up
        workshopCap = math.ceil(numPersons / numWorkshops)
        costDivision = 100 // numWorkshops  # value used for min cost flow algorithm

        # raise error and return status 400 if number of workshops available is less than number of workshops to attend
        if attend > numWorkshops:
            return jsonify({"error": "MAKE SURE THE NUMBER OF FUCKING WORKSHOPS YOU WANT STUDENTS TO ATTEND FOR EACH SERIES IS LESS THAN OR \
            EQUAL TO THE NUMBER OF WORKSHOPS OFFERED FOR EACH CORRESPONDING SERIES"}), status.HTTP_400_BAD_REQUEST

        # make matches for each number of workshops to attend
        for workshopNum in range(attend):
            columns.append(series.split(
                ":")[0] + " [Workshop " + str(workshopNum + 1) + "]")  # make column

            workshopGraph = nx.DiGraph()  # initialize graph
            # add destination node, demand is number of people
            workshopGraph.add_node('dest', demand=numPersons)

            # add edge for each workshop available, weight must be 0, capacity is determined above
            for workshop in workshops:
                workshopGraph.add_edge(
                    workshop, 'dest', capacity=workshopCap, weight=0)

            # for each person, add a node with -1 demand
            for person, personPrefs in prefs.items():
                workshopGraph.add_node(person, demand=-1)
                # for each workshop in list of current person's prefs
                # add edge from person to workshop
                # capacity is 1, weight is determined by preference with the cost division determined above
                for j, workshop in enumerate(personPrefs):
                    workshopGraph.add_edge(
                        person, workshop, capacity=1, weight=-100 + (j * costDivision))

            # convert directional graph to min cost flow
            flowdict = nx.min_cost_flow(workshopGraph)

            # for each workshop for each person, check if flow is true
            # if true, append workshop to person's matches, then remove workshop from prefs
            for person in prefs:
                for workshop, flow in flowdict[person].items():
                    if flow:
                        try:
                            personMatches[person].append(workshop)
                        except:
                            personMatches[person] = [workshop]
                        prefs[person].remove(workshop)
        i += 1  # increment for the workshopsToAttend

    # make json data
    df = pd.DataFrame(columns=columns)
    i = 0
    for person in personMatches:
        matches.append(
            {'Name': emails[person], 'Email': person, 'Matches': personMatches[person]})
        df.loc[i] = [person, emails[person]] + personMatches[person]
        i += 1

    # all fucking good!
    return jsonify({'matches': matches, 'columns': columns, 'stringRep': df.to_html()}), status.HTTP_200_OK
