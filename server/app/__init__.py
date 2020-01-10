from flask import Flask, render_template, make_response, request, jsonify
from flask_api import status
from flask_restful import Api
import networkx as nx
import math
import pandas as pd

app = Flask(__name__, static_folder="../../client/build/static",
            template_folder="../../client/build")


@app.route('/')
@app.route('/about')
@app.route('/guidelines')
def index():
    return render_template('index.html')


@app.route('/api/sort', methods=['POST'])
def sortWorkshops():
    if not request.json or not "rows" in request.json or not "workshopsToAttend" in request.json:
        return jsonify({"error": "HENRY, YOU'RE A FUCKING IDIOT"}), status.HTTP_400_BAD_REQUEST
    matches = []

    seriesdict = {}  # dictionary of prefs for each series
    seriescols = {}  # keeps track of which columns are for which series
    seriesworkshops = {}  # for each series, set of workshops belonging in each
    emails = {}
    for count, row in enumerate(request.json["rows"]):
        if count == 0:
            for i in range(3, len(row)):
                seriesdict[row[i].split("[")[0].strip()] = {}
                seriescols[i] = row[i].split("[")[0].strip()

            if len(seriesdict) != len(request.json["workshopsToAttend"]):
                return jsonify({"error": "HENRY, YOU'RE A FUCKING IDIOT"}), status.HTTP_400_BAD_REQUEST
        else:
            currname = row[1].strip()
            emails[currname] = row[2].strip()
            for i in range(3, len(row)):
                try:
                    seriesdict[seriescols[i]][currname].append(row[i].strip())
                except:
                    seriesdict[seriescols[i]][currname] = [row[i].strip()]

                try:
                    seriesworkshops[seriescols[i]].add(row[i].strip())
                except:
                    seriesworkshops[seriescols[i]] = set()
                    seriesworkshops[seriescols[i]].add(row[i].strip())

    columns = ["Name", "Email"]
    i = 0
    personMatches = {}
    for series in seriesdict:
        prefs = seriesdict[series]
        workshops = list(seriesworkshops[series])
        attend = request.json["workshopsToAttend"][i]
        numPersons = len(prefs)
        numWorkshops = len(workshops)
        workshopCap = math.ceil(numPersons / numWorkshops)
        costDivision = 100 // numWorkshops

        for workshopNum in range(attend):
            columns.append(series.split(
                ":")[0] + " [Workshop " + str(workshopNum + 1) + "]")
            workshopGraph = nx.DiGraph()
            workshopGraph.add_node('dest', demand=numPersons)

            for workshop in workshops:
                workshopGraph.add_edge(
                    workshop, 'dest', capacity=workshopCap, weight=0)

            for person, personPrefs in prefs.items():
                workshopGraph.add_node(person, demand=-1)
                for j, workshop in enumerate(personPrefs):
                    workshopGraph.add_edge(
                        person, workshop, capacity=1, weight=-100 + (j * costDivision))

            flowdict = nx.min_cost_flow(workshopGraph)
            for person in prefs:
                for workshop, flow in flowdict[person].items():
                    if flow:
                        try:
                            personMatches[person].append(workshop)
                        except:
                            personMatches[person] = [workshop]
                        prefs[person].remove(workshop)
        i += 1

    df = pd.DataFrame(columns=columns)
    i = 0
    for person in personMatches:
        matches.append(
            {'Name': person, 'Email': emails[person], 'Matches': personMatches[person]})
        df.loc[i] = [person, emails[person]] + personMatches[person]
        i += 1

    return jsonify({'matches': matches, 'columns': columns, 'stringRep': df.to_html()}), status.HTTP_200_OK
