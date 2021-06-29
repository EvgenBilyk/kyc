document.getElementById('btnAcceptForm').onclick = () => {
    document.querySelector('.acceptForm').classList.toggle('hide');
}


document.getElementById('quest_1_N').onclick = () => {
    document.querySelector('.notConsilienceEDR').classList.remove('hide');
}

document.getElementById('quest_1_Y').onclick = () => {
    document.querySelector('.notConsilienceEDR').classList.add('hide');
}

document.getElementById('quest_1_1_N').onclick = () => {
    document.querySelector('.groupKbv').classList.add('hide');
}

document.getElementById('quest_1_1_Y').onclick = () => {
    document.querySelector('.groupKbv').classList.remove('hide');
}

document.getElementById('groupKbvAdd').onclick = () => {
    let group = document.getElementById('groupName').value;
    if (group !== "") {
        document.querySelector('.nameGroup').innerHTML = `Клієнт належить до групи ${group}`
    }
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
        document.querySelector('.addPep').classList.add('hide');
        console.log('pep_1')
    } else if (this.id == "pep_2") {
        document.querySelector('.pepIdent').classList.add('hide');
        document.querySelector('.addPep').classList.remove('hide');
        console.log('pep_2')
    }
    // } else if (this.id == "pep_3") {
    //     document.querySelector('.addPep').classList.remove('hide');
    //     document.querySelector('.pepNot').classList.add('hide');
    //     document.querySelector('.pepIdent').classList.add('hide');
    // }
}

document.getElementById('quest_4_Y').onclick = () => {
    document.querySelector('.kbvCheckBlock').classList.add('hide');
    document.querySelector('.kbvCheckBlockVar').classList.remove('hide');
}

document.getElementById('quest_4_N').onclick = () => {
    document.querySelector('.kbvCheckBlock').classList.remove('hide');
    document.querySelector('.kbvCheckBlockVar').classList.add('hide');
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

document.getElementById('addKbv').onclick = () => {
    document.querySelector('.addKbvInput').classList.toggle('hide');
}

