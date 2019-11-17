from flask import Flask, render_template, make_response

app = Flask(__name__, static_folder="../../client/build/static",
            template_folder="../../client/build")


@app.route('/')
def index():
    return render_template('index.html')


app.run()


# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
