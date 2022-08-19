prediction_1="";
perdiction_2="";

Webcam .set({
    height:350,
    width:300,
    image_format : png ,
    png_quality:90
});

camera =document.getElementById("camera")

Webcam.attach(' #camera')

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FHkq9GZ1b/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');

}
function speak(){
    var synth= Window.speechSynthesis;
    speak_data_1 ="The First Pediction is " + prediction_1;
    speak_data_2 ="And the Second Prediction is " + perdiction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function check()
{
img = document.getElementById('captured-image')
classifier.classify(img , gotResult);
}

function gotResult(error,results)
{
if (error) {
console.error(error);
}else {
console.log(results);
document.getElementById("result_emtion_name").innerHTML = results[0].label;
document.getElementById("result_emtion_name1").innerHTML = results[1].label;
perdiction_1 = results[0].label; 
perdiction_2 = results[1].label;
speak();
if (results[0].label == happy){
    document.getElementById("update_emoji").innerHTML = "&#128522";
}

if (results[0].label == sad){
    document.getElementById("update_emoji").innerHTML = "&#128532";
}

if (results[0].label == angery){
    document.getElementById("update_emoji").innerHTML = "&#128548";
}

if (results[1].label == happy){
    document.getElementById("update_emoji2").innerHTML = "&#128522";
}

if (results[1].label == sad){
    document.getElementById("update_emoji2").innerHTML = "&#128532";
}

if (results[1].label == angery){
    document.getElementById("update_emoji").innerHTML = "&#128548";
}
}
}



