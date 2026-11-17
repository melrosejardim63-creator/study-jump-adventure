gdjs.WinScreen_322Code = {};
gdjs.WinScreen_322Code.localVariables = [];
gdjs.WinScreen_322Code.idToCallbackMap = new Map();
gdjs.WinScreen_322Code.GDFadeObjectObjects1= [];
gdjs.WinScreen_322Code.GDFadeObjectObjects2= [];
gdjs.WinScreen_322Code.GDFadeObjectObjects3= [];
gdjs.WinScreen_322Code.GDQuizQuestionObjects1= [];
gdjs.WinScreen_322Code.GDQuizQuestionObjects2= [];
gdjs.WinScreen_322Code.GDQuizQuestionObjects3= [];
gdjs.WinScreen_322Code.GDQuizAnswer1Objects1= [];
gdjs.WinScreen_322Code.GDQuizAnswer1Objects2= [];
gdjs.WinScreen_322Code.GDQuizAnswer1Objects3= [];
gdjs.WinScreen_322Code.GDQuizAnswer2Objects1= [];
gdjs.WinScreen_322Code.GDQuizAnswer2Objects2= [];
gdjs.WinScreen_322Code.GDQuizAnswer2Objects3= [];
gdjs.WinScreen_322Code.GDQuizAnswer3Objects1= [];
gdjs.WinScreen_322Code.GDQuizAnswer3Objects2= [];
gdjs.WinScreen_322Code.GDQuizAnswer3Objects3= [];
gdjs.WinScreen_322Code.GDQuizHelpObjects1= [];
gdjs.WinScreen_322Code.GDQuizHelpObjects2= [];
gdjs.WinScreen_322Code.GDQuizHelpObjects3= [];
gdjs.WinScreen_322Code.GDQuizSelectorObjects1= [];
gdjs.WinScreen_322Code.GDQuizSelectorObjects2= [];
gdjs.WinScreen_322Code.GDQuizSelectorObjects3= [];


gdjs.WinScreen_322Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.WinScreen_322Code.GDFadeObjectObjects2);
{for(var i = 0, len = gdjs.WinScreen_322Code.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreen_322Code.GDFadeObjectObjects2[i].setPosition(0,0);
}
}
{for(var i = 0, len = gdjs.WinScreen_322Code.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreen_322Code.GDFadeObjectObjects2[i].getBehavior("Resizable").setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.WinScreen_322Code.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreen_322Code.GDFadeObjectObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.WinScreen_322Code.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreen_322Code.GDFadeObjectObjects2[i].getBehavior("Tween").addObjectOpacityTween("SceneFadeIn", 0, runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), 500, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.WinScreen_322Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.WinScreen_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.WinScreen_322Code.GDFadeObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinScreen_322Code.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.WinScreen_322Code.GDFadeObjectObjects1[i].getBehavior("Tween").exists("SceneFadeIn") ) {
        isConditionTrue_0 = true;
        gdjs.WinScreen_322Code.GDFadeObjectObjects1[k] = gdjs.WinScreen_322Code.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.WinScreen_322Code.GDFadeObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinScreen_322Code.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.WinScreen_322Code.GDFadeObjectObjects1[i].getBehavior("Tween").hasFinished("SceneFadeIn") ) {
        isConditionTrue_0 = true;
        gdjs.WinScreen_322Code.GDFadeObjectObjects1[k] = gdjs.WinScreen_322Code.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.WinScreen_322Code.GDFadeObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15374436);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Johnathan_So-Victory.ogg", 80, false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15375996);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tempo_vitoria");
}
{runtimeScene.getGame().getVariables().getFromIndex(16).getChild("Checkpoint").setString("0");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreen_322Code.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreen_322Code.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreen_322Code.GDQuizSelectorObjects1[i].setPosition(45,237);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreen_322Code.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreen_322Code.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreen_322Code.GDQuizSelectorObjects1[i].setPosition(45,357);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreen_322Code.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreen_322Code.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreen_322Code.GDQuizSelectorObjects1[i].setPosition(45,477);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15382900);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(10).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(8).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15384428);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreen_322Code.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreen_322Code.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreen_322Code.GDQuizSelectorObjects1[i].setPosition(45,237);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreen_322Code.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreen_322Code.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreen_322Code.GDQuizSelectorObjects1[i].setPosition(45,357);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreen_322Code.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreen_322Code.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreen_322Code.GDQuizSelectorObjects1[i].setPosition(45,477);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(12).getAsString());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage3", false);
}
}

}


};

gdjs.WinScreen_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinScreen_322Code.GDFadeObjectObjects1.length = 0;
gdjs.WinScreen_322Code.GDFadeObjectObjects2.length = 0;
gdjs.WinScreen_322Code.GDFadeObjectObjects3.length = 0;
gdjs.WinScreen_322Code.GDQuizQuestionObjects1.length = 0;
gdjs.WinScreen_322Code.GDQuizQuestionObjects2.length = 0;
gdjs.WinScreen_322Code.GDQuizQuestionObjects3.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer1Objects1.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer1Objects2.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer1Objects3.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer2Objects1.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer2Objects2.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer2Objects3.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer3Objects1.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer3Objects2.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer3Objects3.length = 0;
gdjs.WinScreen_322Code.GDQuizHelpObjects1.length = 0;
gdjs.WinScreen_322Code.GDQuizHelpObjects2.length = 0;
gdjs.WinScreen_322Code.GDQuizHelpObjects3.length = 0;
gdjs.WinScreen_322Code.GDQuizSelectorObjects1.length = 0;
gdjs.WinScreen_322Code.GDQuizSelectorObjects2.length = 0;
gdjs.WinScreen_322Code.GDQuizSelectorObjects3.length = 0;

gdjs.WinScreen_322Code.eventsList1(runtimeScene);
gdjs.WinScreen_322Code.GDFadeObjectObjects1.length = 0;
gdjs.WinScreen_322Code.GDFadeObjectObjects2.length = 0;
gdjs.WinScreen_322Code.GDFadeObjectObjects3.length = 0;
gdjs.WinScreen_322Code.GDQuizQuestionObjects1.length = 0;
gdjs.WinScreen_322Code.GDQuizQuestionObjects2.length = 0;
gdjs.WinScreen_322Code.GDQuizQuestionObjects3.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer1Objects1.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer1Objects2.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer1Objects3.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer2Objects1.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer2Objects2.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer2Objects3.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer3Objects1.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer3Objects2.length = 0;
gdjs.WinScreen_322Code.GDQuizAnswer3Objects3.length = 0;
gdjs.WinScreen_322Code.GDQuizHelpObjects1.length = 0;
gdjs.WinScreen_322Code.GDQuizHelpObjects2.length = 0;
gdjs.WinScreen_322Code.GDQuizHelpObjects3.length = 0;
gdjs.WinScreen_322Code.GDQuizSelectorObjects1.length = 0;
gdjs.WinScreen_322Code.GDQuizSelectorObjects2.length = 0;
gdjs.WinScreen_322Code.GDQuizSelectorObjects3.length = 0;


return;

}

gdjs['WinScreen_322Code'] = gdjs.WinScreen_322Code;
