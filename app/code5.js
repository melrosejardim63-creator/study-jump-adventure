gdjs.WinScreenCode = {};
gdjs.WinScreenCode.localVariables = [];
gdjs.WinScreenCode.idToCallbackMap = new Map();
gdjs.WinScreenCode.GDFadeObjectObjects1= [];
gdjs.WinScreenCode.GDFadeObjectObjects2= [];
gdjs.WinScreenCode.GDFadeObjectObjects3= [];
gdjs.WinScreenCode.GDQuizQuestionObjects1= [];
gdjs.WinScreenCode.GDQuizQuestionObjects2= [];
gdjs.WinScreenCode.GDQuizQuestionObjects3= [];
gdjs.WinScreenCode.GDQuizAnswer1Objects1= [];
gdjs.WinScreenCode.GDQuizAnswer1Objects2= [];
gdjs.WinScreenCode.GDQuizAnswer1Objects3= [];
gdjs.WinScreenCode.GDQuizAnswer2Objects1= [];
gdjs.WinScreenCode.GDQuizAnswer2Objects2= [];
gdjs.WinScreenCode.GDQuizAnswer2Objects3= [];
gdjs.WinScreenCode.GDQuizAnswer3Objects1= [];
gdjs.WinScreenCode.GDQuizAnswer3Objects2= [];
gdjs.WinScreenCode.GDQuizAnswer3Objects3= [];
gdjs.WinScreenCode.GDQuizHelpObjects1= [];
gdjs.WinScreenCode.GDQuizHelpObjects2= [];
gdjs.WinScreenCode.GDQuizHelpObjects3= [];
gdjs.WinScreenCode.GDQuizSelectorObjects1= [];
gdjs.WinScreenCode.GDQuizSelectorObjects2= [];
gdjs.WinScreenCode.GDQuizSelectorObjects3= [];


gdjs.WinScreenCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.WinScreenCode.GDFadeObjectObjects2);
{for(var i = 0, len = gdjs.WinScreenCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreenCode.GDFadeObjectObjects2[i].setPosition(0,0);
}
}
{for(var i = 0, len = gdjs.WinScreenCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreenCode.GDFadeObjectObjects2[i].getBehavior("Resizable").setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.WinScreenCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreenCode.GDFadeObjectObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.WinScreenCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreenCode.GDFadeObjectObjects2[i].getBehavior("Tween").addObjectOpacityTween("SceneFadeIn", 0, runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), 500, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.WinScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.WinScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.WinScreenCode.GDFadeObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinScreenCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.WinScreenCode.GDFadeObjectObjects1[i].getBehavior("Tween").exists("SceneFadeIn") ) {
        isConditionTrue_0 = true;
        gdjs.WinScreenCode.GDFadeObjectObjects1[k] = gdjs.WinScreenCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.WinScreenCode.GDFadeObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinScreenCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.WinScreenCode.GDFadeObjectObjects1[i].getBehavior("Tween").hasFinished("SceneFadeIn") ) {
        isConditionTrue_0 = true;
        gdjs.WinScreenCode.GDFadeObjectObjects1[k] = gdjs.WinScreenCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.WinScreenCode.GDFadeObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15335148);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15336468);
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
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreenCode.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreenCode.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreenCode.GDQuizSelectorObjects1[i].setPosition(45,217);
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
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreenCode.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreenCode.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreenCode.GDQuizSelectorObjects1[i].setPosition(45,327);
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
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreenCode.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreenCode.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreenCode.GDQuizSelectorObjects1[i].setPosition(45,437);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15343364);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15344892);
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
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreenCode.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreenCode.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreenCode.GDQuizSelectorObjects1[i].setPosition(45,217);
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
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreenCode.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreenCode.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreenCode.GDQuizSelectorObjects1[i].setPosition(45,327);
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
gdjs.copyArray(runtimeScene.getObjects("QuizSelector"), gdjs.WinScreenCode.GDQuizSelectorObjects1);
{for(var i = 0, len = gdjs.WinScreenCode.GDQuizSelectorObjects1.length ;i < len;++i) {
    gdjs.WinScreenCode.GDQuizSelectorObjects1[i].setPosition(45,437);
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage2", false);
}
}

}


};

gdjs.WinScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinScreenCode.GDFadeObjectObjects1.length = 0;
gdjs.WinScreenCode.GDFadeObjectObjects2.length = 0;
gdjs.WinScreenCode.GDFadeObjectObjects3.length = 0;
gdjs.WinScreenCode.GDQuizQuestionObjects1.length = 0;
gdjs.WinScreenCode.GDQuizQuestionObjects2.length = 0;
gdjs.WinScreenCode.GDQuizQuestionObjects3.length = 0;
gdjs.WinScreenCode.GDQuizAnswer1Objects1.length = 0;
gdjs.WinScreenCode.GDQuizAnswer1Objects2.length = 0;
gdjs.WinScreenCode.GDQuizAnswer1Objects3.length = 0;
gdjs.WinScreenCode.GDQuizAnswer2Objects1.length = 0;
gdjs.WinScreenCode.GDQuizAnswer2Objects2.length = 0;
gdjs.WinScreenCode.GDQuizAnswer2Objects3.length = 0;
gdjs.WinScreenCode.GDQuizAnswer3Objects1.length = 0;
gdjs.WinScreenCode.GDQuizAnswer3Objects2.length = 0;
gdjs.WinScreenCode.GDQuizAnswer3Objects3.length = 0;
gdjs.WinScreenCode.GDQuizHelpObjects1.length = 0;
gdjs.WinScreenCode.GDQuizHelpObjects2.length = 0;
gdjs.WinScreenCode.GDQuizHelpObjects3.length = 0;
gdjs.WinScreenCode.GDQuizSelectorObjects1.length = 0;
gdjs.WinScreenCode.GDQuizSelectorObjects2.length = 0;
gdjs.WinScreenCode.GDQuizSelectorObjects3.length = 0;

gdjs.WinScreenCode.eventsList1(runtimeScene);
gdjs.WinScreenCode.GDFadeObjectObjects1.length = 0;
gdjs.WinScreenCode.GDFadeObjectObjects2.length = 0;
gdjs.WinScreenCode.GDFadeObjectObjects3.length = 0;
gdjs.WinScreenCode.GDQuizQuestionObjects1.length = 0;
gdjs.WinScreenCode.GDQuizQuestionObjects2.length = 0;
gdjs.WinScreenCode.GDQuizQuestionObjects3.length = 0;
gdjs.WinScreenCode.GDQuizAnswer1Objects1.length = 0;
gdjs.WinScreenCode.GDQuizAnswer1Objects2.length = 0;
gdjs.WinScreenCode.GDQuizAnswer1Objects3.length = 0;
gdjs.WinScreenCode.GDQuizAnswer2Objects1.length = 0;
gdjs.WinScreenCode.GDQuizAnswer2Objects2.length = 0;
gdjs.WinScreenCode.GDQuizAnswer2Objects3.length = 0;
gdjs.WinScreenCode.GDQuizAnswer3Objects1.length = 0;
gdjs.WinScreenCode.GDQuizAnswer3Objects2.length = 0;
gdjs.WinScreenCode.GDQuizAnswer3Objects3.length = 0;
gdjs.WinScreenCode.GDQuizHelpObjects1.length = 0;
gdjs.WinScreenCode.GDQuizHelpObjects2.length = 0;
gdjs.WinScreenCode.GDQuizHelpObjects3.length = 0;
gdjs.WinScreenCode.GDQuizSelectorObjects1.length = 0;
gdjs.WinScreenCode.GDQuizSelectorObjects2.length = 0;
gdjs.WinScreenCode.GDQuizSelectorObjects3.length = 0;


return;

}

gdjs['WinScreenCode'] = gdjs.WinScreenCode;
