// Modalityandnegationexperiments//
// Do show progress bar (fine! I give in)
uniqueID = [1,2,3,4].map(v=>Math.floor((1+Math.random())*0x10000).toString(16).substring(1)).join('-');

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("sep", rshuffle(startsWith('MODALITYNEGATION'),startsWith('filler'))),
    "debrief", 
    "hiddenCompletionCode");

var sendingResultsMessage = "Vǎ rugǎm sǎ aşteptaţi.Rǎspunsurile dumneavoastrǎ se transferǎ acum."; 
var completionMessage = "Mulţumim pentru participare!";
var completionErrorMessage = "A avut loc o eroare în transmiterea rǎspunsurilor."; 

// Controller settings.
// Parameter settings taken from Staub 2009

var defaults = [
    "Separator", {
        transfer: 1000,                                      // How long between sentences? (ms)
        normalMessage: " "  // What is message presented between stims? Can be blank.
    },
    "Question", {
        hasCorrect: false
    },
    
        "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],            /// What are options on Likert scale? Define both # of options and their labels.
        presentAsScale: true,                               /// Should it be presented as a scale? 'true' or 'false'
        instructions: "Use number keys or click boxes to answer.",    /// Brief instructions present on each trial
        leftComment: "(Complet inacceptabil)", rightComment: "(Complet acceptabil)"        /// Labels on end-points of scale
    },
    "Message", {
        hideProgressBar: true
    }
];
var randomnumber=Math.floor(Math.random()*10000000001); 
var completionCode=String("LIR" + randomnumber); 
var sendingResultsMessage = "Rǎspunsurile dumneavoastrǎ se transferǎ acum. Vǎ rugǎm sǎ aşteptaţi."; 
var completionMessage = "Mulţumim pentru participare. Rǎspunsurile dumneavoastrǎ au fost transmise cu succes. Codul dumneavoastrǎ de participare este: " + completionCode; 
var completionErrorMessage = "Transmiterea rǎspunsurilor a eşuat. Vǎ rugǎm sǎ o contactaţi pe cameliableotu@gmail.com şi sǎ încercaţi sǎ transmiteţi rǎspunsurile din nou apǎsând pe link. Codul dumneavoastrǎ de participare este: " + completionCode; 


// Items array.
var items = [

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
  ["sep", "Separator", { }],
    ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Hai sǎ exersǎm un pic înainte de a începe."]
                         ]}],
['shared-intro', "Question", {q:"Ȋn ‘Linda nu are de ce sǎ ţipe. Toatǎ lumea o poate auzi.’, propoziţia ‘Linda nu are de ce sǎ ţipe’ înseamnǎ",as: [['s', 'E necesar ca Linda sǎ nu ţipe.'], ['k','Nu e necesar ca Linda sǎ ţipe.']]},
                   "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este ‘Linda nu are de ce sǎ ţipe’ în contextul ‘Linda nu are de ce sǎ ţipe. Toatǎ lumea o poate auzi.’?"}],                                                                                            

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum ţi se pare? Pur şi simplu alegeţi interpretarea care vi se pare mai potrivitǎ. Apoi, spuneţi cât de acceptabilǎ vi se pare propoziţia’."],           
                           ["p", "Hai sǎ exersǎm mai mult."],
                           ]}],

                   
['shared-intro', "Question", {q:"In ‘Nu spune minciuni! Prietena ta se va supǎra pe tine.’, propoziţia ‘Nu spune minciuni!’ înseamnǎ",as: [['s', 'E necesar sǎ nu spui minciuni.'], ['k','Nu e necesar sǎ spui minciuni.']]},
                  "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este‘Nu spune miciuni!’ în contextul ‘Nu spune minciuni! Prietena ta se va supǎra pe tine.’?"}],  
['shared-intro', "Question", {q:"Ȋn ‘Nu ai de ce sǎ-ţi faci griji. O sǎ pierzi cazul.’, propoziţia ‘Nu ai de ce sǎ-ţi faci griji.’ means",as: [['s', 'E necesar sǎ nu-ţi faci griji.'], ['k', 'Nu e necesar sǎ-ţi faci griji.']]},
                  "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este‘Nu ai de ce sǎ-ţi faci griji.’ în contextul ‘‘Nu ai de ce sǎ-ţi faci griji. O sǎ pierzi cazul.’.’?"}],   
['shared-intro', "Question", {q:"Ȋn ‘Nu fi înalt! Sunt destui oameni înalţi în camerǎ.’, propoziţia ‘Nu fi înalt!’ înseamnǎ ",as: [['s', 'E necesar sǎ nu fii înalt.'], ['k', 'Nu e necesar sǎ fii înalt.']]},
                 "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este‘Nu fi înalt!’ în contextul ‘Nu fi înalt! Sunt destui oameni înalţi în camerǎ.’?"}], 
['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Foarte bine, aţi exersat suficient! Apǎsaţi orice tastǎ când sunteţi gata sǎ începeţi."]

                        ]}],
  
// Shared experimental items + fillers
  
[["MODALITYNEGATION-notnecessary",1], "Question", {q:"Ȋn ‘Nu trebuie sǎ te îngrijorezi. Femeia îţi va da banii.’, ‘Nu trebuie sǎ te îngrijorezi’ înseamnǎ",as: [['s','E necesar sǎ nu te îngrijorezi.'],['k','Nu e necesar sǎ te îngrijorezi.']]},
                                      "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este‘Nu trebuie sǎ te îngrijorezi’ în contextul ‘Nu trebuie sǎ te îngrijorezi. Femeia îţi va da banii’.?"}],
[["MODALITYNEGATION-necessarynot",1],  "Question", {q:" Ȋn ‘Nu trebuie sǎ te îngrijorezi. Te vei îmbolnǎvi altfel.’, ‘Nu trebuie sǎ te îngrijorezi’ înseamnǎ ",as: [['s','E necesar sǎ nu te îngrijorezi.'],['k','Nu e necesar sǎ te îngrijorezi.']]},
                                      "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu trebuie sǎ te îngrijorezi. Te vei îmbolnǎvi altfel’  în contextul  ‘Nu trebuie sǎ te îngrijorezi. Te vei îmbolnǎvi altfel’?"}],
[["MODALITYNEGATION-notnecessary",2],  "Question",{q:" Ȋn ‘Nu trebuie sǎ te panichezi. Profesoara va da un test uşor.’, ‘Nu trebuie sǎ te panichezi’ înseamnǎ ",as: [['s', ‘E necesar sǎ nu te panichezi.'],['k','Nu e necesar sǎ te panichezi.']]}, 
                                       "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu trebuie sǎ te panichezi’ în contextul ‘Nu trebuie sǎ te panichezi. Profesoara va da un test uşor.’?"}],
[["MODALITYNEGATION-necessarynot",2], "Question", {q:" Ȋn ‘Nu trebuie sǎ se panicheze. Urşii îl vor ataca altfel.’, ‘Nu trebuie sǎ se panicheze.’ înseamnǎ ",as: [['s', ‘E necesar sǎ nu se panicheze.'],['k','Nu e necesar sǎ se panicheze.']]}, 
                                       "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu trebuie sǎ se panicheze’ în contextul ‘Nu trebuie sǎ se panicheze. Urşii îl vor ataca altfel.’?"}],
[["MODALITYNEGATION-notnecessary",3], "Question", {q:" Ȋn ‘Nu trebuie sǎ fie tristǎ. Mama ei va gǎsi pǎpuşa.’, ‘Nu trebuie sǎ fie tristǎ.’ înseamnǎ ",as: [['s','E necesar sǎ nu fie tristǎ.'],['k','Nu e necesar sǎ fie tristǎ.']]}, 
                                       "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este ‘Nu trebuie sǎ fie tristǎ.’ în contextul  ‘Nu trebuie sǎ fie tristǎ. Mama ei va gǎsi pǎpuşa.’?"}],
[["MODALITYNEGATION-necessarynot",3], "Question", {q:" Ȋn ‘Nu trebuie sǎ fie tristǎ. Va distruge petrecerea altfel.’, ‘Nu trebuie sǎ fie tristǎ.’ înseamnǎ", as: : [['s','E necesar sǎ nu fie tristǎ.'],['k','Nu e necesar sǎ fie tristǎ.']]}, 
                                       "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este ‘Nu trebuie sǎ fie tristǎ.’ în contextul ‘Nu trebuie sǎ fie tristǎ. Va distruge petrecerea altfel.’?"}],
[["MODALITYNEGATION-notnecessary",4], "Question", {q:" Ȋn ‘Nu trebuie sǎ fii furios. Bǎrbatul te va rǎsplǎti pentru eforturile tale.’, ‘Nu trebuie sǎ fii furios.’ înseamnǎ ",as: [['s', 'E necesar sǎ nu fii furios.'],['k','Nu e necesar sǎ fii furios.']]}, 
                                       "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu trebuie sǎ fii furios.’ în contextul 'E necesar sǎ nu fii furios ‘Nu trebuie sǎ fii furios. Bǎrbatul te va rǎsplǎti pentru eforturile tale.’?"}],
[["MODALITYNEGATION-necessarynot",4], "Question", {q:" Ȋn ‘Nu trebuie sǎ fii furios. Mama ta te va pedepsi altfel.’,‘ Nu trebuie sǎ fii furios.’ înseamnǎ ",as: [['s', 'E necesar sǎ nu fii furios.'],['k','Nu e necesar sǎ fii furios.']]}, 
                                       "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu trebuie sǎ fii furios.’ în contextul ‘Nu trebuie sǎ fii furios. Mama ta te va pedepsi altfel.’?"}],
[["MODALITYNEGATION-notnecessary",5], "Question", {q:" Ȋn ‘Tom nu trebuie sǎ mǎnânce pâine. Nu se va usca pânǎ mâine.’, ‘Tom nu trebuie sǎ mǎnânce pâine.’ înseamnǎ ",as: [['s','E necesar ca Tom sǎ nu mǎnânce pâine.'],['k',''Nu e necesar ca Tom sǎ  mǎnânce pâine.']]},
                                       "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Tom nu trebuie sǎ mǎnânce pâine.’ în contextul ‘Tom nu trebuie sǎ mǎnânce pâine. Nu se va usca pânǎ mâine.’?"}],
[["MODALITYNEGATION-necessarynot",5], "Question", {q:" Ȋn ‘Tom nu trebuie sǎ mǎnânce pâine. Ȋi vin rudele în vizitǎ.’, ‘Tom nu trebuie sǎ mǎnânce pâine’ înseamnǎ ",as: [['s','E necesar ca Tom sǎ nu mǎnânce pâine.'],['k',''Nu e necesar ca Tom sǎ  mǎnânce pâine.']]},
                                       "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Tom nu trebuie sǎ mǎnânce pâine.’ în contextul ‘Tom nu trebuie sǎ mǎnânce pâine. Ȋi vin rudele în vizitǎ.’?"}],
[["MODALITYNEGATION-notnecessary",6], "Question", {q:" Ȋn ‘Nu trebuie sǎ lucrezi la proiect. Bill  l-a terminat deja.’, ‘Nu trebuie sǎ lucrezi la proiect.’ înseamnǎ ",as: [['s','E necesar sǎ nu lucrezi la proiect.'],['k','Nu e necesar sǎ lucrezi la proiect.']]},
                                       "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este ‘Nu trebuie sǎ lucrezi la proiect.’ în contextul ‘Nu trebuie sǎ lucrezi la proiect. Bill l-a terminat deja.’?"}],
[["MODALITYNEGATION-necessarynot",6], "Question", {q:" Ȋn ‘Nu trebuie sǎ lucrezi la proiect. Soţia şi copiii se vor supǎra.’ ,‘ Nu trebuie sǎ lucrezi la proiect..’ înseamnǎ ",as: [['s','E necesar sǎ nu lucrezi la proiect.'],['k','Nu e necesar sǎ lucrezi la proiect.']]},
                                      "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este ‘Nu trebuie sǎ lucrezi la proiect.’ în contextul ‘Nu trebuie sǎ lucrezi la proiect. Soţia şi copiii se vor supǎra.’?"}],
[["MODALITYNEGATION-notnecessary",7], "Question", {q:" Ȋn ‘Linda nu trebuie sǎ vorbeascǎ germanǎ. Toţi germanii din birou vorbesc limba ei nativǎ, englezǎ.’, ‘Linda nu trebuie sǎ vorbeascǎ germanǎ.’ means",as: [['s','E necesar ca Linda sǎ nu vorbeascǎ germanǎ.'],['k','Nu e necsar ca Linda sǎ vorbeascǎ germanǎ.']]},
                                       "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Linda nu trebuie sǎ vorbeascǎ germanǎ.’ în contextul ‘Linda nu trebuie sǎ vorbeascǎ germanǎ. Toţi germanii din birou vorbesc limba ei nativǎ, englezǎ.’?"}],
[["MODALITYNEGATION-necessarynot",7], "Question", {q:"Ȋn ‘Linda nu trebuie sǎ vorbeascǎ germanǎ. Oaspeţii noştri nu înţeleg germanǎ.’, ‘Linda nu trebuie sǎ vorbeascǎ germanǎ.’ means",as: [['s','E necesar ca Linda sǎ nu vorbeascǎ germanǎ.'],['k','Nu e necesar ca Linda sǎ vorbeascǎ germanǎ.']]},

                                       "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este ‘Linda nu trebuie sǎ vorbeascǎ germanǎ.’ în contextul ‘Linda nu trebuie sǎ vorbeascǎ germane. Oaspeţii noştri nu înţeleg germanǎ.’?"}],
[["MODALITYNEGATION-notnecessary",8], "Question", {q:"Ȋn ‘Nu trebuie sǎ bei alcohol. Eşti deja binedispus.’,‘Nu trebuie sǎ bei alcohol.’ înseamnǎ ",as: [['s','Este necesar sǎ nu bei alcohol.'],['k','Nu e necesar sǎ bei alcohol.']]},
                                      "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu trebuie sǎ bei alcohol’ în contextul ‘Nu trebuie sǎ bei alcohol. Eşti deja binedispus.’?"}],
[["MODALITYNEGATION-necessarynot",8], "Question", {q:" Ȋn ‘Nu trebuie sǎ bei alcohol. O sǎ-ţi facǎ rǎu.’,‘Nu trebuie sǎ bei alcohol.’ means",as: [['s','Este necesar sǎ nu bei alcohol.'],['k','Nu e necesar sǎ bei alcohol.']]},
                                       "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este ‘Nu trebuie sǎ bei alcohol’.’ în contextul ‘Nu trebuie sǎ bei alcohol. O sǎ-ţi facǎ rǎu.’?"}],


//// Fillers
[["filler-should",9],"Question", {q:" Ȋn ‘Maria nu ar trebui sǎ fie supǎratǎ. Tatǎl ei îi va da o nouǎ maşinǎ.’, ‘Maria nu ar trebui sǎ fie supǎratǎ.’ înseamnǎ",as: [['s',Este necesar ca Maria sǎ nu fie supǎratǎ.'],['k','Nu e necesar ca Maria sǎ fie supǎratǎ.']]},
                     "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este ‘Maria nu ar trebui sǎ fie supǎratǎ.’ în contextul ‘Maria nu ar trebui sǎ fie supǎratǎ. Tatǎl ei îi va da o nouǎ maşinǎ.’?"}],          
[["filler-should",10], "Question", {q:"In ‘Nu ar trebui sǎ te enervezi. Soţia ta îţi va pregǎti cina.’, ‘Nu ar trebui sǎ te enervezi.’ înseamnǎ ",as: [['s','Este necesar sǎ nu te enervezi.'],['k','Nu este necesar sǎ te enervezi.']]},
                       "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu ar trebui sǎ te enervezi.’ în  contextul ‘Nu ar trebui sǎ te enervezi. Soţia ta îţi va pregǎti cina.’?"}],
[["filler-should",11],  "Question", {q:"In ‘Tim nu ar trebui sǎ gǎteascǎ orez. Prietenei lui nu îi place.’, ‘Tim nu ar trebui sǎ gǎteascǎ orez.’ means",as: [['s','E necesar ca Tim sǎ nu gǎteascǎ orez.'],['k','Nu e necesar ca Tim sǎ gǎteascǎ orez.']]},
                        "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Tim nu ar trebui sǎ gǎteascǎ orez.’ is in the context ‘Tim nu ar trebui sǎ gǎteascǎ orez. Prietenei lui nu îi place.’?"}],
[["filler-should",12],  "Question", {q:"In  ‘Nu ar trebui sǎ scrii primul draft. Laura este primul autor.’, 'Nu ar trebui sǎ scrii primul draft.' means",as: [['s','Nu e necesar sǎ scrii tu primul draft.'],['k','E necesar sǎ nu scrii tu primul draft.']]},
                        "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu ar trebui sǎ scrii primul draft.’ în contextul ‘Nu ar trebui sǎ scrii primul draft. Laura este primul autor.’?"}],
[["filler-need",13], "Question", {q:"Ȋn ‘Nu e nevoie ca Tom sǎ se ofenseze. Femeia nu a vrut deloc sǎ-l jigneascǎ.’, 'Nu e nevoie ca Tom sǎ se ofenseze.' înseamnǎ",as: [['s','E necesar ca Tom sǎ nu se ofenseze.'],['k','Nu e necesar ca Tom sǎ se ofenseze. .']]},
                      "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu e nevoie ca Tom sǎ se ofenseze.’ în contextul ‘Nu e nevoie ca Tom sǎ se ofenseze. Femeia nu a vrut deloc sǎ-l jigneascǎ.’?"}],
[["filler-need",14], "Question", {q:"Ȋn ‘Nu e nevoie sǎ te superi.  Profesorul doar glumeşte un pic.’, ‘Nu e nevoie sǎ te superi.’ înseamnǎ",as: [['s','E necesar sǎ nu te superi.'],['k','Nu e necesar sǎ te superi.']]},
                     "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu e nevoie sǎ te  superi.’ în contextul ‘Nu e nevoie sǎ te superi. Profesorul doar glumeşte un pic.’?"}],
[["filler-need",15], "Question", {q:"Ȋn ‘Nu e nevoie ca Sophie sǎ facǎ curǎţenie în camerǎ azi. Camera aratǎ încǎ destul de bine.’, ‘Nu e nevoie ca Sophie sǎ facǎ curǎţenie în camera azi.’ înseamnǎ ", as: [['s','E necesar ca Sophie sǎ nu facǎ curǎţenie în camera azi.'],['k','Nu e necesar ca Sophie sǎ facǎ curǎţenie în camerǎ azi.']]},
                      "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu e nevoie ca Sophie sǎ facǎ curǎţenie în camerǎ azi.’ în contextul ‘Nu e nevoie ca Sophie sǎ facǎ curǎţenie în camerǎ azi. Camera aratǎ încǎ destul de bine.’?"}],
[["filler-need",16], "Question", {q:"Ȋn ‘Nu e nevoie sǎ desenezi toate materialele tu însuţi. Poţi sǎ angajezi un designer.’, ‘Nu e nevoie sǎ desenezi toate materialele tu însuşi.’ înseamnǎ",as: [['s',' E necesar sǎ nu desenezi toate materialele tu însuţi.'],['k','Nu e necesar sǎ  desenezi toate materialele tu însuţi.']]},
                     "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este ‘Nu e nevoie sǎ desenezi toate materialele tu însuţi.’ în contexul ‘Nu e nevoie sǎ  desenezi toate materialele tu însuţi. Poţi sǎ angajezi un designer.’?"}],

[["filler-should",17],"Question", {q:"Ȋn ‘Tom nu ar trebui sǎ fie fericit. Şcoala îi va da mulţi bani.’, ‘Tom nu ar trebui sǎ fie fericit.’ means",as: [['s','E necesar ca Tom sǎ nu fie fericit.'],['k','Nu e necesar ca Tom sǎ nu fie fericit.']]},
                     "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Tom nu ar trebui sǎ fie fericit.’ în contextul ‘Tom nu ar trebui sǎ fie fericit. Şcoala îi va da mulţi bani.’?"}],          
[["filler-should",18], "Question", {q:"Ȋn ‘Nu ar trebui sǎ fii uimit. Soţia ta a câştigat cel mai mare premiu de film.’, ‘Nu ar trebui sǎ fii uimit.’ înseamnǎ",as: [['s','E necesar sǎ nu fii uimit.'],['k','Nu e necesar sǎ fii uimit.']]},
                       "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu ar trebui sǎ fii uimit.’ în contextul ‘Nu ar trebui sǎ fii uimit. Soţia ta a câştigat cel mai mare premiu de film.’?"}],
[["filler-should",19], "Question", {q:" Ȋn ‘Linda nu ar trebui sǎ o ajute pe Mary. Mary se simte foarte pierdutǎ.’, ‘Linda nu ar trebui sǎ o ajute pe Mary.’ înseamnǎ ",as: [['s', 'E necesar ca Linda sǎ nu o ajute pe Mary.'],['k','Nu e necesar ca Linda sǎ o ajute pe Mary.']]},
                        "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Linda nu ar trebui sǎ o ajute pe Mary.’ în contextul ‘Linda nu ar trebui sǎ o ajute pe Mary. Mary se simte foarte pierdutǎ.’?"}],
[["filler-should",20],  "Question", {q:"In  ‘Nu ar trebui sǎ-ţi vorbeşti cu blândeţe. Vei sfârşi cu depresie.’, ' Nu ar trebui sǎ-ţi vorbeşti cu blândeţe.' înseamnǎ ",as: [['s','E necesar sǎ nu-ţi vorbeşti cu blândeţe.'],['k','Nu e necesar sǎ-ţi vorbeşti cu blândeţe.']]},
                        "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu ar trebui sǎ-ţi vorbeşti cu blândeţe’ în contextul ‘Nu ar trebui sǎ-ţi vorbeşti cu blândeţe. Vei sfârşi cu depresie.’?"}],
[["filler-need", 21], "Question", {q:"Ȋn ‘Nu e nevoie ca Bill sǎ se entuziasmeze. Femeia l-a invitat la filmul lui preferat.’, ‘Nu e nevoie ca Bill sǎ se entuziasmeze.’ înseamnǎ ",as: [['s','E necesar ca Bill sǎ nu se entuziasmeze.'],['k','Nu e necesar ca Bill sǎ se entuziasmeze.']]},
                      "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu e nevoie ca Bill sǎ se entuziasmeze.’ în contextul ‘Nu e nevoie ca Bill sǎ se entuziasmeze. Femeia l-a invitat la filmul lui preferat.’?"}],
[["filler-need",22], "Question", {q:"Ȋn  ‘Nu e nevoie sǎ te bucuri. Soţul tǎu ţi-a dat un cadou minunat.’, ‘Nu e nevoie sǎ te bucuri. ’ înseamnǎ ",as: [['s','E necesar sǎ nu te bucuri.'],['k','Nu e necesar sǎ te bucuri.']]},
                     "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu e nevoie sǎ te bucuri.’ în contextul ‘Nu e nevoie sǎ te bucuri. Soţul tǎu ţi-a dat un cadou minunat.’?"}],
[["filler-need",23], "Question", {q:"Ȋn ‘Nu e nevoie ca Sarah sǎ aibǎ grijǎ de bolnavi. Aceştia sunt în mare suferinţǎ.’, ‘Nu e nevoie ca Sarah sǎ aibǎ grijǎ de bolnavi.’ î",as: [['s','E necesar ca Sarah sǎ nu aibǎ grijǎ de bolnavi.'],['k','Nu e necesar ca Sarah sǎ aibǎ grijǎ de bolnavi..']]},
                      "AcceptabilityJudgment", {s: "Cât de acceptabilǎ este ‘Nu e nevoie ca Sarah sǎ aibǎ grijǎ de bolnavi.’ în contextul ‘Nu e nevoie ca Sarah sǎ aibǎ grijǎ de bolnavi. Aceştia sunt în mare suferinţǎ.’?"}],
[["filler-need",24], "Question", {q:" Ȋn ‘Nu e nevoie sǎ mǎturi podeaua. E foarte murdarǎ.’, ‘Nu e nevoie sǎ mǎturi podeaua.’ înseamnǎ",as: [['s','E necesar sǎ nu mǎturi podeaua.'],['k','Nu e necesar sǎ mǎturi podeaua.']]},
                     "AcceptabilityJudgment", {s: " Cât de acceptabilǎ este ‘Nu e nevoie sǎ mǎturi podeaua.’ în contextul ‘Nu e nevoie sǎ mǎturi podeaua. E foarte murdarǎ.’?"}],


["hiddenCompletionCode", "FlashSentence", {s: String(completionCode), timeout: 1, sentenceDescType: "literal"}] 


    ]   





  
