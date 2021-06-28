document.getElementById('btnAcceptForm').onclick = () => {
    document.querySelector('.acceptForm').classList.toggle('hide');
}


document.getElementById('quest_1_N').onclick = () => {
    document.querySelector('.notConsilienceEDR').classList.remove('hide');
}

document.getElementById('quest_1_Y').onclick = () => {
    document.querySelector('.notConsilienceEDR').classList.add('hide');
}

document.getElementById('quest_2_Y').onclick = () => {
    document.querySelector('.fatcaQuest').classList.remove('hide');
}

document.getElementById('quest_2_N').onclick = () => {
    document.querySelector('.fatcaQuest').classList.add('hide');
}

document.getElementById('quest_3_Y').onclick = () => {
    document.querySelector('.pepBlock').classList.remove('hide');
}

document.getElementById('quest_3_N').onclick = () => {
    document.querySelector('.pepBlock').classList.add('hide');
}


document.querySelectorAll('.peps').forEach(elem => elem.onclick = pepCheck)

function pepCheck() {
    if (this.id == "pep_1") {
        document.querySelector('.pepIdent').classList.remove('hide');
        document.querySelector('.pepNot').classList.add('hide');
        document.querySelector('.addPep').classList.add('hide');
    } else if (this.id == "pep_2") {
        document.querySelector('.pepNot').classList.remove('hide');
        document.querySelector('.pepIdent').classList.add('hide');
        document.querySelector('.addPep').classList.add('hide');
    } else if (this.id == "pep_3") {

        document.querySelector('.addPep').classList.remove('hide');
        document.querySelector('.pepNot').classList.add('hide');
        document.querySelector('.pepIdent').classList.add('hide');
    }
}

document.getElementById('addKbv').onclick = () => {
    document.querySelector('.addKbvInput').classList.toggle('hide');
}

document.getElementById('addKbvId').onclick = () => {
    document.querySelector('.markovKbv').classList.remove('hide');
}

document.getElementById('newAutorhide').onclick = () => {
    document.querySelector('.newAutorhide').classList.toggle('hide');
}

document.getElementById('authorRp').onclick = () => {
    document.querySelector('.authorRp').classList.toggle('hide');
}

