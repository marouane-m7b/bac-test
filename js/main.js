let dawra1 = document.getElementById('dawra1');
let dawra2 = document.getElementById('dawra2');
let jihawi = document.getElementById('jihawi');
let watani = document.getElementById('watani');
let result = document.getElementById('result');
let allCalc = document.getElementById('allCalc');


let solok1 = document.getElementById('solok-1');
let solok = 0;

let ei1 = document.getElementById('ei-1');
let ei2 = document.getElementById('ei-2');
let ei4 = document.getElementById('ei-4');
let ei = 0;

let es1 = document.getElementById('es-1');
let es2 = document.getElementById('es-2');
let es3 = document.getElementById('es-3');
let es = 0;

let mat1 = document.getElementById('mat-1');
let mat2 = document.getElementById('mat-2');
let mat3 = document.getElementById('mat-3');
let mat = 0;

let ph1 = document.getElementById('ph-1');
let ph2 = document.getElementById('ph-2');
let ph4 = document.getElementById('ph-4');
let ph = 0;

let pc1 = document.getElementById('pc-1');
let pc2 = document.getElementById('pc-2');
let pc4 = document.getElementById('pc-4');
let pc = 0;

let eng1 = document.getElementById('eng-1');
let eng2 = document.getElementById('eng-2');
let eng4 = document.getElementById('eng-4');
let eng = 0;

let ar1 = document.getElementById('ar-1');
let ar2 = document.getElementById('ar-2');
let ar4 = document.getElementById('ar-4');
let ar = 0;

let fr1 = document.getElementById('fr-1');
let fr2 = document.getElementById('fr-2');
let fr3 = document.getElementById('fr-3');
let fr4 = document.getElementById('fr-4');
let fr5 = document.getElementById('fr-5');
let fr = 0;

let svt1 = document.getElementById('svt-1');
let svt2 = document.getElementById('svt-2');
let svt3 = document.getElementById('svt-3');
let svt4 = document.getElementById('svt-4');
let svt = 0;

let solokM3ml = document.getElementById('solok-m3ml');
let eiM3ml = document.getElementById('ei-m3ml');
let esM3ml = document.getElementById('es-m3ml');
let matM3ml = document.getElementById('mat-m3ml');
let phM3ml = document.getElementById('ph-m3ml');
let pcM3ml = document.getElementById('pc-m3ml');
let engM3ml = document.getElementById('eng-m3ml');
let arM3ml = document.getElementById('ar-m3ml');
let frM3ml = document.getElementById('fr-m3ml');
let svtM3ml = document.getElementById('svt-m3ml');

let solokAll = 0;
let eiAll = 0;
let esAll = 0;
let matAll = 0;
let phAll = 0;
let pcAll = 0;
let engAll = 0;
let arAll = 0;
let frAll = 0;
let svtAll = 0;

let all = document.getElementById('all');
let click = document.getElementById('calc');
let nja7 = document.getElementById('cmnt');

click.onclick = function () {
  solok = (Number(solok1.value));
  ei = ((Number(ei1.value) + Number(ei2.value)) / 2 * 0.75 + Number(ei4.value) * 0.25);
  es = ((Number(es1.value) + Number(es2.value) + Number(es3.value)) / 3);
  mat = ((Number(mat1.value) + Number(mat2.value) + Number(mat3.value)) / 3);
  ph = ((Number(ph1.value) + Number(ph2.value)) / 2 * 0.75 + Number(ph4.value) * 0.25);
  pc = ((Number(pc1.value) + Number(pc2.value)) / 2 * 0.75 + Number(pc4.value) * 0.25);
  eng = ((Number(eng1.value) + Number(eng2.value)) / 2 * 0.6 + Number(eng4.value) * 0.4);
  ar = ((Number(ar1.value) + Number(ar2.value)) / 2 * 0.75 + Number(ar4.value) * 0.25);
  fr = ((Number(fr1.value) + Number(fr2.value) + Number(fr3.value) + Number(fr4.value) + Number(fr5.value)) / 5);
  svt = ((Number(svt1.value) + Number(svt2.value) + Number(svt3.value) + Number(svt4.value)) / 4);

  solokAll = solok * solokM3ml.value;
  eiAll = ei * eiM3ml.value;
  esAll = es * esM3ml.value;
  matAll = mat * matM3ml.value;
  phAll = ph * phM3ml.value;
  pcAll = pc * pcM3ml.value;
  engAll = eng * engM3ml.value;
  arAll = ar * arM3ml.value;
  frAll = fr * frM3ml.value;
  svtAll = svt * svtM3ml.value;

  let mo3amilat = Number(solokM3ml.value) + Number(eiM3ml.value) + Number(esM3ml.value) + Number(matM3ml.value) + Number(phM3ml.value) + Number(pcM3ml.value) + Number(engM3ml.value) + Number(arM3ml.value) + Number(frM3ml.value) + Number(svtM3ml.value);
  let points = Number(solokAll) + Number(eiAll) + Number(esAll) + Number(matAll) + Number(phAll) + Number(pcAll) + Number(engAll) + Number(arAll) + Number(frAll) + Number(svtAll);
  if (mo3amilat > 0) {
    all.value = (Number(points) / Number(mo3amilat)).toFixed(2);
    dawra1.value = (Number(points) / Number(mo3amilat)).toFixed(2);
  }
  else {
    all.value = 0..toFixed(2);
    dawra1.value = 0..toFixed(2);
  }
}








let d2solok1 = document.getElementById('d2solok-1');
let d2solok = 0;

let d2ei1 = document.getElementById('d2ei-1');
let d2ei2 = document.getElementById('d2ei-2');
let d2ei4 = document.getElementById('d2ei-4');
let d2ei = 0;

let d2es1 = document.getElementById('d2es-1');
let d2es2 = document.getElementById('d2es-2');
let d2es3 = document.getElementById('d2es-3');
let d2es = 0;

let d2mat1 = document.getElementById('d2mat-1');
let d2mat2 = document.getElementById('d2mat-2');
let d2mat3 = document.getElementById('d2mat-3');
let d2mat = 0;

let d2ph1 = document.getElementById('d2ph-1');
let d2ph2 = document.getElementById('d2ph-2');
let d2ph4 = document.getElementById('d2ph-4');
let d2ph = 0;

let d2pc1 = document.getElementById('d2pc-1');
let d2pc2 = document.getElementById('d2pc-2');
let d2pc4 = document.getElementById('d2pc-4');
let d2pc = 0;

let d2eng1 = document.getElementById('d2eng-1');
let d2eng2 = document.getElementById('d2eng-2');
let d2eng4 = document.getElementById('d2eng-4');
let d2eng = 0;

let d2ar1 = document.getElementById('d2ar-1');
let d2ar2 = document.getElementById('d2ar-2');
let d2ar4 = document.getElementById('d2ar-4');
let d2ar = 0;

let d2fr1 = document.getElementById('d2fr-1');
let d2fr2 = document.getElementById('d2fr-2');
let d2fr3 = document.getElementById('d2fr-3');
let d2fr4 = document.getElementById('d2fr-4');
let d2fr5 = document.getElementById('d2fr-5');
let d2fr = 0;

let d2svt1 = document.getElementById('d2svt-1');
let d2svt2 = document.getElementById('d2svt-2');
let d2svt3 = document.getElementById('d2svt-3');
let d2svt4 = document.getElementById('d2svt-4');
let d2svt = 0;

let d2solokM3ml = document.getElementById('d2solok-m3ml');
let d2eiM3ml = document.getElementById('d2ei-m3ml');
let d2esM3ml = document.getElementById('d2es-m3ml');
let d2matM3ml = document.getElementById('d2mat-m3ml');
let d2phM3ml = document.getElementById('d2ph-m3ml');
let d2pcM3ml = document.getElementById('d2pc-m3ml');
let d2engM3ml = document.getElementById('d2eng-m3ml');
let d2arM3ml = document.getElementById('d2ar-m3ml');
let d2frM3ml = document.getElementById('d2fr-m3ml');
let d2svtM3ml = document.getElementById('d2svt-m3ml');

let d2solokAll = 0;
let d2eiAll = 0;
let d2esAll = 0;
let d2matAll = 0;
let d2phAll = 0;
let d2pcAll = 0;
let d2engAll = 0;
let d2arAll = 0;
let d2frAll = 0;
let d2svtAll = 0;

let d2all = document.getElementById('d2all');
let d2click = document.getElementById('d2calc');
let d2nja7 = document.getElementById('d2cmnt');

d2click.onclick = function () {
  d2solok = (Number(d2solok1.value));
  d2ei = ((Number(d2ei1.value) + Number(d2ei2.value)) / 2 * 0.75 + Number(d2ei4.value) * 0.25);
  d2es = ((Number(d2es1.value) + Number(d2es2.value) + Number(d2es3.value)) / 3);
  d2mat = ((Number(d2mat1.value) + Number(d2mat2.value) + Number(d2mat3.value)) / 3);
  d2ph = ((Number(d2ph1.value) + Number(d2ph2.value)) / 2 * 0.75 + Number(d2ph4.value) * 0.25);
  d2pc = ((Number(d2pc1.value) + Number(d2pc2.value)) / 2 * 0.75 + Number(d2pc4.value) * 0.25);
  d2eng = ((Number(d2eng1.value) + Number(d2eng2.value)) / 2 * 0.6 + Number(d2eng4.value) * 0.4);
  d2ar = ((Number(d2ar1.value) + Number(d2ar2.value)) / 2 * 0.75 + Number(d2ar4.value) * 0.25);
  d2fr = ((Number(d2fr1.value) + Number(d2fr2.value) + Number(d2fr3.value) + Number(d2fr4.value) + Number(d2fr5.value)) / 5);
  d2svt = ((Number(d2svt1.value) + Number(d2svt2.value) + Number(d2svt3.value) + Number(d2svt4.value)) / 4);

  d2solokAll = d2solok * d2solokM3ml.value;
  d2eiAll = d2ei * d2eiM3ml.value;
  d2esAll = d2es * d2esM3ml.value;
  d2matAll = d2mat * d2matM3ml.value;
  d2phAll = d2ph * d2phM3ml.value;
  d2pcAll = d2pc * d2pcM3ml.value;
  d2engAll = d2eng * d2engM3ml.value;
  d2arAll = d2ar * d2arM3ml.value;
  d2frAll = d2fr * d2frM3ml.value;
  d2svtAll = d2svt * d2svtM3ml.value;

  let d2mo3amilat = Number(d2solokM3ml.value) + Number(d2eiM3ml.value) + Number(d2esM3ml.value) + Number(d2matM3ml.value) + Number(d2phM3ml.value) + Number(d2pcM3ml.value) + Number(d2engM3ml.value) + Number(d2arM3ml.value) + Number(d2frM3ml.value) + Number(d2svtM3ml.value);
  let d2points = Number(d2solokAll) + Number(d2eiAll) + Number(d2esAll) + Number(d2matAll) + Number(d2phAll) + Number(d2pcAll) + Number(d2engAll) + Number(d2arAll) + Number(d2frAll) + Number(d2svtAll);
  if (d2mo3amilat > 0) {
    d2all.value = (Number(d2points) / Number(d2mo3amilat)).toFixed(2);
    dawra2.value = (Number(d2points) / Number(d2mo3amilat)).toFixed(2);
  }
  else {
    d2all.value = 0..toFixed(2);
    dawra2.value = 0..toFixed(2);
  }
}


allCalc.onclick = function () {
  result.value = (((+dawra1.value + +dawra2.value) / 2 * 0.25) + (jihawi.value * 0.25) + (watani.value * 0.5));
  console.log(dawra1.value)
  console.log(dawra2.value)
  console.log(jihawi.value)
  console.log(watani.value)
}




