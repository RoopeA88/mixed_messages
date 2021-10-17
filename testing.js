function generateMessage(sport, activity, feeling) {
    let sport1 = sport[Math.floor(Math.random() * sport.length)];
    let activity1 = activity[Math.floor(Math.random() * activity.length)];
    let feeling1 = feeling[Math.floor(Math.random() * feeling.length)];
    console.log("Your sport is "+sport1+".");
    console.log("You have done this sport "+activity1+".");
    console.log("You are feeling "+feeling1+" about it.");
}


let sportArray = ["Mountaing climbing", "running", "swimming", "biking"];
let activityArray = ["every day", "some days","not very often","not at all","all the waking hours"];
let howYouFeel = ["satisfied","not satisfied", "depressed","pleased","sad","happy", "indifferent"];

generateMessage(sportArray, activityArray, howYouFeel);