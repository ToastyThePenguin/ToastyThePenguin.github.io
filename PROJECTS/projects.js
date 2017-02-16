var status = "less";

function toggleText()
{
    var text='A compartmentalised approach was adopted for the majority of development in order to ensure each component of the tracking software functioned correctly. This also allowed for a finer understanding of how each part worked and simplified trouble-shooting. As such the problem was broken down into blocks for a top-down design approach.<br/><br/>The final design implementation prioritises speed at the expense of some robustness and sophistication.  This ensures online real-time functionality at up to 60fps. It uses a naïve detection-based blob tracking algorithm which shirks manual initialisation in favour of a binary detector based on a lower threshold of parameters which potential targets must satisfy. Tracking is performed using Kalman Filter trackers. Assignment of trackers to blobs in each successive frame is essential for coherence and continuity. A nearest-neighbour approach was taken in matching trackers to the centroid of blobs. Occlusion is handled using an estimation-based buffer and recover method which exploits the ability of Kalman filters to perform state estimation in the absence of measurements.<br/><br/>This all worked with surprising efficacy given how basic it all is. The performance of the final algorithm was found to be favourable with a 91.14% detection accuracy and 82.62% tracking accuracy. Furthermore, complete, long-term occlusion was successfully handled with an 88.4% success rate. These results are excellent but are only possible in good lighting. As such much work has to be done in order to make the algorithm robustly capable of tracking in low lit conditions. The results of this research project illustrate that bat tracking and indeed the tracking of small, fast-moving objects is quite possible with some of the most basic tools in the computer vision workshop. See the video below for a more qualitative look at the results.<br/><br/><iframe align="middle" width="640" height="360" src="https://www.youtube.com/embed/R-3WgtrZ1PE" frameborder="0" allowfullscreen></iframe><br/><br/>The datasets generated were mostly suitable analogues for testing and development purposes while presenting more challenging circumstances and motion paths than might be found in nature.<br/><br/>The research presented here is meagre but offers a contribution to the field of multiple target tracking by proposing a simple yet effective tracking and detection algorithm for the tracking of multiple small, fast-moving targets. Furthermore the proposed algorithm was shown to perform excellently in good lighting and with further work could be robust to lighting changes. As such it could conceivably be integrated into and further the existing research.';
    
    if (status == "less") {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "LESS";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea").innerHTML = "";
        document.getElementById("toggleButton").innerText = "READ MORE...";
        status = "less"
    }
}


var status2 = "less";

function toggleText2()
{
    var text2="I also feel that my years at the site illustrate my diversity as more than just a lab-bound tech-head.<br/><br/>As the site grew I took on more responsibility, first as an editor then as reviews editor and finally with a fortnightly column. My years at EGMR were crucial in developing certain skills applicable to any workplace. I learnt to work within a team, manage my fellow writers, maintain morale and communicate with video game distributors. <br/><br/>From 2013 I attended and covered gaming events and conducted interviews with game developers (my last interview can be viewed here). I also produced various header image designs for our podcast, columns, features and end of year awards. In addition to this I took the initiative to design branded t-shirts and button badges.<br/><br/>At the beginning of 2016 EGMR closed down, a tough decision which the executive team came to after much deliberation. The duty fell on me to deliver the closing post (which can be viewed here).<br/><br/>The staff at EGMR were like a second family and through my nearly six years with the site I gained invaluable experience that I'd otherwise have never gained.";
    
    if (status2 == "less") {
        document.getElementById("textArea2").innerHTML=text2;
        document.getElementById("toggleButton2").innerText = "LESS";
        status2 = "more";
    } else if (status2 == "more") {
        document.getElementById("textArea2").innerHTML = "";
        document.getElementById("toggleButton2").innerText = "READ MORE...";
        status2 = "less"
    }
}