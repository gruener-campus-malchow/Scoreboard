$(document).ready(function(){
	
	function Circlebar(e){this.element=$(e.element),this.element.append('<div class="spinner-holder-one animate-0-25-a"><div class="spinner-holder-two animate-0-25-b"><div class="loader-spinner" style=""></div></div></div><div class="spinner-holder-one animate-25-50-a"><div class="spinner-holder-two animate-25-50-b"><div class="loader-spinner"></div></div></div><div class="spinner-holder-one animate-50-75-a"><div class="spinner-holder-two animate-50-75-b"><div class="loader-spinner"></div></div></div><div class="spinner-holder-one animate-75-100-a"><div class="spinner-holder-two animate-75-100-b"><div class="loader-spinner"></div></div></div>'),this.value,this.maxValue,this.counter,this.dialWidth,this.size,this.fontSize,this.fontColor,this.skin,this.triggerPercentage,this.type,this.timer;var t=this.element[0].dataset,a=this;this.initialise=function(){a.value=parseInt(t.circleStarttime)||parseInt(e.startTime)||0,a.maxValue=parseInt(t.circleMaxvalue)||parseInt(e.maxValue)||60,a.counter=parseInt(t.circleCounter)||parseInt(e.counter)||1e3,a.dialWidth=parseInt(t.circleDialwidth)||parseInt(e.dialWidth)||5,a.size=t.circleSize||e.size||"150px",a.fontSize=t.circleFontsize||e.fontSize||"20px",a.fontColor=t.circleFontcolor||e.fontColor||"rgb(135, 206, 235)",a.skin=t.circleSkin||e.skin||" ",a.triggerPercentage=t.circleTriggerpercentage||e.triggerPercentage||!1,a.type=t.circleType||e.type||"timer",a.element.addClass(a.skin).addClass("loader"),a.element.find(".loader-bg").css("border-width",a.dialWidth+"px"),a.element.find(".loader-spinner").css("border-width",a.dialWidth+"px"),a.element.css({width:a.size,height:a.size}),a.element.find(".loader-bg .text").css({"font-size":a.fontSize,color:a.fontColor})},this.initialise(),this.renderProgress=function(e){var t=0;(e=Math.floor(e))<25?(t=e/100*360-90,a.element.find(".animate-0-25-b").css("transform","rotate("+t+"deg)"),a.triggerPercentage&&a.element.addClass("circle-loaded-0")):e>=25&&e<50?(t=(e-25)/100*360-90,a.element.find(".animate-0-25-b").css("transform","rotate(0deg)"),a.element.find(".animate-25-50-b").css("transform","rotate("+t+"deg)"),a.triggerPercentage&&a.element.removeClass("circle-loaded-0").addClass("circle-loaded-25")):e>=50&&e<75?(t=(e-50)/100*360-90,a.element.find(".animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)"),a.element.find(".animate-50-75-b").css("transform","rotate("+t+"deg)"),a.triggerPercentage&&a.element.removeClass("circle-loaded-25").addClass("circle-loaded-50")):e>=75&&e<=100&&(t=(e-75)/100*360-90,a.element.find(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)"),a.element.find(".animate-75-100-b").css("transform","rotate("+t+"deg)"),a.triggerPercentage&&a.element.removeClass("circle-loaded-50").addClass("circle-loaded-75"))},this.textFilter=function(){var e,t,i,r=0,n=0,s=a.element.find(".text");if("timer"==a.type&&(a.timer=setInterval(function(){a.value<a.maxValue?(a.value+=parseInt(a.counter/1e3),r=100*a.value/a.maxValue,a.renderProgress(r),s[0].dataset.value=a.value,(n=new Date(null)).setSeconds(a.value),s.html(n.toISOString().substr(11,8))):clearInterval(a.timer)},a.counter)),"progress"==a.type){e=.1,t=100,i=function(){a.value<a.maxValue&&a.value<100&&(a.value+=1,a.renderProgress(a.value),s[0].dataset.value=a.value,s.html(Math.floor(a.value)+"%"),setTimeout(i,++t*e))},setTimeout(i,e)}},this.textFilter(),this.setValue=function(e){text=a.element.find(".text"),a.value=e,a.renderProgress(a.value),text[0].dataset.value=a.value,text.html(a.value)}}$(document).ready(function(){var e={element:".circlebar"};$(".circlebar").each(function(){e.element=$(this),new Circlebar(e)})}),jQuery.fn.Circlebar=function(e){e.element=this.selector,new Circlebar(e)};
	
	var sv;
	var dv;
	
	var mF = {
		buildPage :function(){
			
			$('.fightDetail').height(($(document).height() - $('.branding').outerHeight() - $('.sponsors').outerHeight()) + 'px');
			
			dv = definitionsVar;
			
			if(typeof singularVar !== 'undefined' && Object.keys(singularVar).length > 0){
				sv = singularVar;
			}else{
				sv = singularVarTemp;
				sv.time = dv.time;
			}
			
			$('.logo').attr('src',dv.logo);
			$('.tagline').html(dv.tagline);
			$('.singleFight').each(function(index){
				$('.singleFight[data-id='+index+']').children('.fighterSingle').children('.fighterId').html(sv.fight[index].name);
				$('.singleFight[data-id='+index+']').children('.fighterScores').children('.columns').children('.fighterIcon').children('img').attr('src',sv.fight[index].icon);
			});
			
			mF.timerControl('run',sv);
			
		},
		runSponsors :function(){
			
		},
		timerControl :function(action){
			if(action == 'run'){
				mF.clockInit('#theTimer',sv.time);
			}
		},
		clockInit :function(element,maxValue,dialWidth = 30,fontSize = "14px",size = "240px",skin = "fire"){
			new Circlebar({
				element: element,
				maxValue: maxValue,
				dialWidth: dialWidth,
				fontSize: fontSize,
				size: size,
				skin: skin,
				type: "timer",
				triggerPercentage: true
			});
		},
		scoreControl: function(){
			
		}
	}
	
	mF.buildPage();
});