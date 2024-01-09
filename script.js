const daybtns = document.querySelectorAll('.day');
const dayNum = document.querySelector('#dayNumber');
daybtns.forEach((button, index) => {
    button.addEventListener('click', function() {
        let num = index + 1;
        localStorage.setItem('selectedDay', num);
        window.location.href = 'newEntry.html';
        
    })
})

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the selected day from localStorage
    const selectedDay = localStorage.getItem('selectedDay');
    
    // Get the span element by its ID and update its text content
    const daySpan = document.getElementById('dayNumber');
    daySpan.textContent = selectedDay;
});

let journalPrompts = [
    "How long will you put off what you are capable of doing just to continue what you are comfortable doing?", 
    "What are the most likely sources of pain in my life over the next year? How can I prepare for or prevent them?",
    "Here’s a simple question with potentially wide-reaching implications: Can my current habits carry me to my desired future?",
    "What should you do more of this decade? What should you do less of?",
    'Look at each item on your to-do list and ask, “Is this truly necessary?' ,
    "Do you really need to think more, or is it simply a matter of doing the work?", 
    "The people who have already walked through the fire can help you do the same. Who are you surrounding yourself with?", 
    "How are you collaborating in your defeat? How are you contributing to your own struggle?", 
    "How would the person I wish to be act today?", 
    "What can you remove from your life that would improve it?", 
    "Are things truly not going well … or do I just need some food, water, and a short break?​", 
    "How can I prepare carefully, but execute quickly?", 
    "Am I happy with the tradeoffs I am making in my life right now?", 
    "What is the biggest opportunity I could pursue in the next 5 minutes?", 
    "If you were forced to work for just one hour per day, what would you work on during that hour to be most effective?", 
    "What is the most neglected important area in my life right now?", 
    "Are your obligations real or imagined?", 
    "What are you avoiding just because you know the answer is painful?", 
    "Am I climbing the right mountain?", 
    "What do you really wish you had the courage to do? Follow up: How can you take the first step in the next 5 minutes?​", 
    "Over the last 10 years, what has become more important to you? What has become less important?", 
    "Think of the ultimate outcome you are hoping to achieve. Is there a path to accomplishing this where you would encounter less resistance?", 
    "What am I holding on to that I need to let go of this year?", 
    "In what ways are you a difficult person to work with? What can you learn from that?", 
    "Am I tolerating my flaws or improving them?", 
    "Will this matter in six months?", 
    "What are the minority of my actions that drive the majority of my results?", 
    "A simple question to run your daily decisions through: Will this cost me time in the future or save me time in the future?", 
    "Whose expectations am I trying to fulfill? My own or those of someone else?", 
    "What would 10-year-old me say? What would 80-year-old me say?", 
    "How would I know if my beliefs are wrong?", 
    "Which projects give me energy? Which projects takes it away? Which people give me energy? Which people take it away?", 
    "How can I make the most of this?", 
    "Who is your biggest fan? How can you thank them today?", 
    "What is one thing I am looking forward to today?", 
    "Can you sit still, do nothing, and breathe deeply for the next two minutes?", 
    "Am I proud of what I am choosing to do?", 
    "Who do I know that can help me with this?", 
    "A simple question that may help reveal the positive side of the current moment: What does this make possible?", 
    "What is something that feels productive to you in the moment, but usually ends up wasting time and energy?", 
    "Am I doing this for Present Me or Future Me?", 
    "Simple question to find work you love: What do you enjoy refining? (It’s the areas you can’t help yourself from editing and optimizing where you have a long-term advantage.)", 
    "If someone could only see my actions and not hear my words, what would they say are my priorities?", 
    "What is the biggest small thing I could do today?", 
    "Which of my current habits serves me most? Which serves me least?", 
    "What are you preventing yourself from feeling?", 
    "What can you work on today that will continue working for you years from now?", 
    "Am I being good to myself?", 
    "What am I avoiding just because the desired outcome would take longer than I’d like?", 
    "Assume that more than one path exists to achieve your ideal life. What would some of the alternative routes look like?",
    "Imagine each day is only 12 hours long. What would you cut out?",
    "Which areas of my life are in maintenance mode? Which areas are in growth mode?",
    "Am I being effective or just busy?",
    "What am I holding on to that I need to let go of?",
    "What is your personal compounding advantage in your career?",
    "What is one thing you can accomplish today that would make this day a success?",
    "What are the 1–2 things that if you get them done today, you’ll go to bed content?",
    "Is there a better way? Is there a kinder way?",
    "If you keep living the way you are, what will your life look like in 20 years? Sometimes we need patience. Sometimes we need action.",
    "Who brings out your best qualities? Can you take five minutes right now to schedule time with them?",
    "What are the important problems in your field? And if you’re not working on them, why not?",
    "What am I reinforcing each day?",
    "Momentum is a double-edged sword. It can propel you to new heights or keep you locked into previous choices and old habits. Where do I have healthy momentum right now? Where do I have unhealthy momentum?",
    "What is the little bit of extra work that has huge upside?",
    "Who can I collaborate with to make this easier?",
    "What part of this situation is under my control?",
    "What is one repeating problem you can automate or eliminate today?",
    "What would your closest friend tell you to do?",
    "Some questions to consider before you speak: Does this need to be said? Does this need to be said by me? Does this need to be said by me right now?",
    "Sometimes you have to pass through the fire. What fire or pain should you seek out in your life over the next year so you can learn its lessons?",
    "Imagine the most important goal or project you are working on right now. Fast forward six months. Imagine the project has failed. Why did you fail?",
    "What is one small thing I could do today that would make a meaningful impact on my future?",
    "What is best in the short-term? What is best in the long-term?",
    "What is a mistake you seem to repeat each year? What can you do to prevent it this time?",
    "If you met someone exactly like yourself …– same experience– same resources– same problems… what advice would you give them?",
    "A simple question that can deliver powerful results if taken seriously: What is the highest leverage action I can execute on right now?",
    "Has the most important thing changed? Am I chasing an outdated target?",
    "What are you working on when time fades away?",
    "If you do not work on important problems, how can you expect to do important work?",
    "Does this activity fill me with energy or drain me of energy?",
    "What do I actually want?",
    "How are you complicit in creating the conditions you say you don’t want?",
    "What are my actions moving me closer to?",
    "What 6-month period of your life was the most energizing and fun? What can you learn from your answer?",
    "What could be improved? What could be removed?",
    "Does the amount of attention I’m giving this match its importance?",
    "How am I living with the results of other people’s thinking?",
    "What do I keep coming back to? What is that telling me?",
    "How can I create an environment that will naturally bring about my desired change?",
    "If I keep doing what I am about to do today for the next five years, will I end up with more of what I want or less of what I want?",
    "How have my bad habits become a crutch I lean on? What stories do I need to let go of so I can walk freely?",
    "How much of what you did today was simply due to inertia? Never get so busy that you forget to actively design your life.",
    "What is a small pleasure that brings me great joy? Can I enjoy it today?",
    "What do you love doing so much that the words failure and success essentially become irrelevant?",
    "Am I working at the right level? Do I need to zoom in or zoom out?",
    "Do the people around me act the way I wish to act?",
    "What is one action that would make today a success?",
    "What is the limiting factor?",
    "People will tell stories about you at your funeral. What chapter are you writing today?",
    "What parts of my story no longer serve me? What stories am I attached to that I need to let go of?",
    "What is the most likely cause of failure? Before it happens, how can I prevent it? If it happens, how can I recover?",
    "What happens if I slow down? What happens if I speed up?",
    "Do I actually need more information or do I simply need to act on the information I already have?",
    "Faster. If I had to go from start to finish in half the time, what would I do? Slower. If I could afford to spend double the time on it, what would I do?",
    "If it fails, where does it fail?",
    "What do I have planned for today that energizes me?",
    "Six months from now, what will you wish you had spent time on today?",
    "Which of my relationships are win-win? Which of my relationships are one-sided?",
    "What’s the cost of doing a poor job? What’s the cost of doing a mediocre job? What’s the cost of doing an exceptional job? Which price are you willing to pay?",
    "What do you need to de-prioritize?",
    "Was this a productive week? What can you do today to guarantee the answer is yes?",
    "To prioritize the day, think about the decade: If I want to be on track to achieve X in 10 years, what do I need to do today?",
    "In what areas would you benefit from setting clearer boundaries?",
    "What if you stopped trying to think your way through it and started to act your way through it?",
    "How can today feel like play?",
    "How much overlap is there between what you say is important to you and how you spent your attention over the last month?"


]
const journalDiv = document.querySelector('#journalPrompt');
const promptbtn = document.querySelector('#promptbtn');
const journalTextArea = document.querySelector('.journal-text');

function promptGenerator() {
    let randomIndex = Math.floor(Math.random() * journalPrompts.length);
    const prompt = document.createElement('p');
    prompt.textContent = journalPrompts[randomIndex];
    prompt.id = "promptGen";
    journalDiv.append(prompt);
    journalTextArea.rows = '20';
    promptbtn.removeEventListener('click', promptGenerator);
}

promptbtn.addEventListener('click',promptGenerator);

document.addEventListener('DOMContentLoaded', function () {
    const dayNumber = document.getElementById('dayNumber').textContent;

    // Check if there's saved data for this day
    const savedData = localStorage.getItem(`day${dayNumber}_savedData`);

    if (savedData) {
        // Display saved data instead of the form
        const parsedData = JSON.parse(savedData);
        document.body.innerHTML = `
            <div class = "newEntryMenu">

                <div class="newEntry-item"> <a href="month.html"><button id="backEntry"> back </button></a> </div>
                <div class="newEntry-item"> <h1 id="reflectionTitle"> Day ${dayNumber} Reflection</h1></div>
                <div class="newEntry-item"> </div>
        
             </div>
            
            <div class="habitContainer1">
                <div class="habit"> workout
                    <p> ${parsedData.workout} </p>
                </div>

                <div class="habit">water intake
                    <p>${parsedData.water} </p>
                </div>
                <div class="habit">meditation/prayer
                     <p id="moodSub"> mood change</p>
                     <p>${parsedData.meditation} </p>
                </div>
                <div class="habit">
                    <p>new word: ${parsedData.newWord} </p>
                    <p>synonym: ${parsedData.synonym} </p>
                </div>
            </div>

            <div class="habitContainer2">

        <div class="habit2"> 
            <div class="titleClass">
                <p class="journalTitle" id="habit2title"> journal</p>
            </div>

            <div id="journalPrompt">
                <p> prompt: ${parsedData.prompt} </p>
            </div>
        
            <p id="entry">${parsedData.journal} </p>

            
        </div>

        <div class="habit2">
            <div class="titleClass">
                <p class="journalTitle" id="readTitle"> read</p>
                <p>book title: ${parsedData.book} </p>
            </div>
            
            <p id="takeTitle"> Three Takeaways</p>

            <div class="takeaways-container">
                <div class="takeaway-item">
                    
                    <p class="recorded-takeaways">1.  ${parsedData.takeaway1} </p>
                </div>
                <div class="takeaway-item">
                    
                    <p class="recorded-takeaways">2. ${parsedData.takeaway2} </p>
                </div>
                <div class="takeaway-item">
                    
                    <p class="recorded-takeaways">3. ${parsedData.takeaway3} </p>
                </div>
            </div>

        </div>
                <div class="newEntry-item"> <a href="month.html"><button id="backEntry"> back </button></a> </div>    
              
           
        `;
    } else {
        const saveButton = document.getElementById('saveEntry');
        saveButton.addEventListener('click', function () {
            // Capture form data
            const workoutValue = document.querySelector('input[name="numRating"]:checked').value;
            const waterValue = document.querySelector('input[name="waterCons"]:checked').value;
            const meditationValue = document.querySelector('input[name="moodRating"]:checked').value;
            const newWordValue = document.getElementById('newWordI').value;
            const synonymValue = document.getElementById('synonymI').value;
            const journalText = document.querySelector('.journal-text').value;
            const bookValue = document.getElementById('bookInput').value;
            const takeaway1Value = document.querySelector('textarea[name="takeaway1"]').value;
            const takeaway2Value = document.querySelector('textarea[name="takeaway2"]').value;
            const takeaway3Value = document.querySelector('textarea[name="takeaway3"]').value;

            const promptElement = document.getElementById('promptGen');
            const prompt = promptElement ? promptElement.textContent : 'No Prompt Selected';

            // Save captured form data in localStorage for this day
            localStorage.setItem(`day${dayNumber}_savedData`, JSON.stringify({
                workout: workoutValue,
                water: waterValue,
                meditation: meditationValue,
                newWord: newWordValue,
                synonym: synonymValue,
                prompt: prompt,
                journal: journalText,
                book: bookValue,
                takeaway1: takeaway1Value,
                takeaway2: takeaway2Value,
                takeaway3: takeaway3Value,
            }));

            // Reload the page to display the saved data
            location.reload();
        });
    }
});



