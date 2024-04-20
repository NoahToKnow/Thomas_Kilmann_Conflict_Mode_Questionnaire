
function Init(){

    var questionsData = {

  "questions": [
    {
      "number": 1,
      "optionA": "There are times when I let others take responsibility for solving the problem.",
      "optionB": "Rather than negotiate the things on which we disagree, I try to stress those things upon which we both agree."
    },
    {
      "number": 2,
      "optionA": "I try to find a compromise solution.",
      "optionB": "I attempt to deal with all of another's and my concerns."
    },
    {
      "number": 3,
      "optionA": "I am usually firm in pursuing my goals.",
      "optionB": "I might try to soothe the other's feelings and preserve our relationship."
    },
    {
      "number": 4,
      "optionA": "I try to find a compromise solution.",
      "optionB": "I sometimes sacrifice my own wishes for the wishes of the other person."
    },
    {
      "number": 5,
      "optionA": "I consistently seek the other's help in working out a solution.",
      "optionB": "I try to do what is necessary to avoid useless tensions."
    },
    {
      "number": 6,
      "optionA": "I try to avoid creating unpleasantness for myself.",
      "optionB": "I try to win my position."
    },
    {
      "number": 7,
      "optionA": "I try to postpone the issue until I have had some time to think about it.",
      "optionB": "I give up some points in exchange for others."
    },
    {
      "number": 8,
      "optionA": "I am usually firm in pursuing my goals.",
      "optionB": "I attempt to get all concerns and issues immediately out in the open."
    },
    {
      "number": 9,
      "optionA": "I feel that differences are not always worth worrying about.",
      "optionB": "I make some effort to get my way."
    },
    {
      "number": 10,
      "optionA": "I am firm in pursuing my goals.",
      "optionB": "I try to find a compromise solution."
    },
    {
      "number": 11,
      "optionA": "I attempt to get all concerns and issues immediately out in the open.",
      "optionB": "I might try to soothe the other's feelings and preserve our relationship."
    },
    {
      "number": 12,
      "optionA": "I sometimes avoid taking positions which would create controversy.",
      "optionB": "I will let another have some of their positions if they lets me have some of mine."
    },
    {
      "number": 13,
      "optionA": "I propose middle ground.",
      "optionB": "I press to get my points made."
    },
    {
      "number": 14,
      "optionA": "I tell another my ideas and ask them for theirs.",
      "optionB": "I try to show him the logic and benefits of my position."
    },
    {
      "number": 15,
      "optionA": "I might try to soothe the other's feelings and preserve our relationship.",
      "optionB": "I try to do what is necessary to avoid tension."
    },
    {
      "number": 16,
      "optionA": "I try not to hurt the other's feelings.",
      "optionB": "I try to convince the other person of the merits of my position."
    },
    {
      "number": 17,
      "optionA": "I am usually firm in pursuing my goals.",
      "optionB": "I try to do what is necessary to avoid useless tensions."
    },
    {
      "number": 18,
      "optionA": "If it makes the other person happy, I might let them maintain their views.",
      "optionB": "I will let the other person have some of their positions if they let me have some of mine."
    },
    {
      "number": 19,
      "optionA": "I try to get all concerns and issues immediately out in the open.",
      "optionB": "I try to postpone the issue until I have had some time to think it over."
    },
    {
      "number": 20,
      "optionA": "I attempt to immediately work through our differences.",
      "optionB": "I try to find a fair combination of gains and losses for both of us."
    },
    {
      "number": 21,
      "optionA": "In approaching negotiations, I try to be considerate of the other person's feelings.",
      "optionB": "I always lean toward a direct discussion of the problem."
    },
    {
      "number": 22,
      "optionA": "I try to find a position that is intermediate between mine and another person's.",
      "optionB": "I assert my wishes."
    },
    {
      "number": 23,
      "optionA": "I am often concerned with satisfying all my wishes.",
      "optionB": "There are times when I let others take responsibility for solving problems."
    },
    {
      "number": 24,
      "optionA": "If the other's position seems important to them, I would try to meet their wishes.",
      "optionB": "I try to get the other person to settle for a compromise."
    },
    {
      "number": 25,
      "optionA": "I try to show the other person the logic and benefits of my position.",
      "optionB": "In approaching negotiations, I try to be considerate of the other person's wishes."
    },
    {
      "number": 26,
      "optionA": "I propose a middle ground.",
      "optionB": "I am nearly always concerned with satisfying all my wishes."
    },
    {
      "number": 27,
      "optionA": "I sometimes avoid taking positions that would create controversy.",
      "optionB": "If it makes the other person happy, I might let them maintain their views."
    },
    {
      "number": 28,
      "optionA": "I am usually firm in pursuing my goals.",
      "optionB": "I feel that differences are not always worth worrying about."
    },
    {
      "number": 29,
      "optionA": "I propose middle ground.",
      "optionB": "I feel that differences are not always worth worrying about."
    },
    {
      "number": 30,
      "optionA": "I try not to hurt the other person's feelings.",
      "optionB": "I always share the problem with the other person so that we can work it out."
    }
  ]
}

var mappings = {
    1: {'A': 'Avoiding', 'B': 'Accommodating'},
    2: {'A': 'Collaborating', 'B': 'Compromising'},
    3: {'A': 'Competing', 'B': 'Avoiding'},
    4: {'A': 'Compromising', 'B': 'Accommodating'},
    5: {'A': 'Collaborating', 'B': 'Avoiding'},
    6: {'A': 'Avoiding', 'B': 'Competing'},
    7: {'A': 'Avoiding', 'B': 'Compromising'},
    8: {'A': 'Competing', 'B': 'Collaborating'},
    9: {'A': 'Competing', 'B': 'Avoiding'},
    10: {'A': 'Competing', 'B': 'Compromising'},
    11: {'A': 'Collaborating', 'B': 'Avoiding'},
    12: {'A': 'Avoiding', 'B': 'Compromising'},
    13: {'A': 'Compromising', 'B': 'Competing'},
    14: {'A': 'Collaborating', 'B': 'Competing'},
    15: {'A': 'Avoiding', 'B': 'Accommodating'},
    16: {'A': 'Avoiding', 'B': 'Competing'},
    17: {'A': 'Competing', 'B': 'Avoiding'},
    18: {'A': 'Avoiding', 'B': 'Accommodating'},
    19: {'A': 'Collaborating', 'B': 'Avoiding'},
    20: {'A': 'Collaborating', 'B': 'Compromising'},
    21: {'A': 'Avoiding', 'B': 'Collaborating'},
    22: {'A': 'Competing', 'B': 'Compromising'},
    23: {'A': 'Collaborating', 'B': 'Avoiding'},
    24: {'A': 'Avoiding', 'B': 'Accommodating'},
    25: {'A': 'Competing', 'B': 'Avoiding'},
    26: {'A': 'Compromising', 'B': 'Competing'},
    27: {'A': 'Accommodating', 'B': 'Avoiding'},
    28: {'A': 'Competing', 'B': 'Collaborating'},
    29: {'A': 'Compromising', 'B': 'Accommodating'},
    30: {'A': 'Avoiding', 'B': 'Collaborating'}
};

    var scores = {
        Competing: 0,
        Collaborating: 0,
        Compromising: 0,
        Avoiding: 0,
        Accommodating: 0
    };


    const form = document.getElementById('questionForm');

    questionsData.questions.forEach(question => {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = `Question ${question.number}`;
        fieldset.appendChild(legend);

        const labelA = document.createElement('label');
        const inputA = document.createElement('input');
        inputA.type = 'radio';
        inputA.name = `question${question.number}`;
        inputA.value = 'A';
        labelA.appendChild(inputA);
        labelA.appendChild(document.createTextNode(question.optionA));
        fieldset.appendChild(labelA);

        const labelB = document.createElement('label');
        const inputB = document.createElement('input');
        inputB.type = 'radio';
        inputB.name = `question${question.number}`;
        inputB.value = 'B';
        labelB.appendChild(inputB);
        labelB.appendChild(document.createTextNode(question.optionB));
        fieldset.appendChild(labelB);

        form.appendChild(fieldset);
    });


    function tallyScores() {
        questionsData.questions.forEach(question => {
            const selectedOption = document.querySelector(`input[name="question${question.number}"]:checked`);
            if (selectedOption) {
                const category = mappings[question.number][selectedOption.value];
                scores[category]++;
            }
        });

        displayResults();
    }

    function displayResults() {
        document.getElementById('competing').textContent = 'Competing: ' + scores.Competing;
        document.getElementById('collaborating').textContent = 'Collaborating: ' + scores.Collaborating;
        document.getElementById('compromising').textContent = 'Compromising: ' + scores.Compromising;
        document.getElementById('avoiding').textContent = 'Avoiding: ' + scores.Avoiding;
        document.getElementById('accommodating').textContent = 'Accommodating: ' + scores.Accommodating;

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        overlay.style.display = 'block'; // Show the overlay
        document.getElementById('results').style.display = 'block'; // Make the results visible
        document.getElementById('downloadImageBtn').style.display = 'inline-block'; // Show download image button

        overlay.addEventListener('click', function() {
            this.style.display = 'none';
            document.getElementById('results').style.display = 'none';
        });
    }



function downloadResultsImage() {
    const resultsDiv = document.getElementById('results');
    html2canvas(resultsDiv).then(canvas => {
        // Create an image from the canvas
        const image = canvas.toDataURL('image/png');

        // Create a link to download the image
        const link = document.createElement('a');
        link.href = image;
        link.download = 'Survey_Results_Image.png'; // Name the image file for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
    $('#b-1').click(function(){
        tallyScores();
    })
    $('#downloadImageBtn').click(function(){
        downloadResultsImage();
    })

}
