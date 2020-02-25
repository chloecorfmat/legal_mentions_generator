window.addEventListener('load', initialiser);

function initialiser(evt) {
    document.getElementById('mlForm').addEventListener('submit', downloadML);

    document.getElementById('sitename').addEventListener('input', changeSitename);
    document.getElementById('siteurl').addEventListener('input', changeSiteurl);
    document.getElementById('legalmentionurl').addEventListener('input', changeLegalmentionurl);

    document.getElementById('lastupdate').addEventListener('input', changeLastupdate);
    document.getElementById('personaldata').addEventListener('input', changePersonaldata);

    document.getElementById('adminmail').addEventListener('input', changeAdminmail);
    document.getElementById('datacontrollername').addEventListener('input', changeDatacontrollername);
    document.getElementById('datacontrolleremail').addEventListener('input', changeDatacontrolleremail);

    document.getElementById('hostname').addEventListener('input', changeHostname);
    document.getElementById('hosturl').addEventListener('input', changeHosturl);
    document.getElementById('hostaddress').addEventListener('input', changeHostaddress);

    document.getElementById('cookies').addEventListener('input', changeCookies);
    document.getElementById('cookiespartners').addEventListener('input', changeCookiespartners);
    document.getElementById('tracking').addEventListener('input', changeTracking);
    //document.getElementById('geolocalisation').addEventListener('input', changeGeolocalisation);
    document.getElementById('school').addEventListener('input', changeSchool);
}

function downloadML(e) {
    e.preventDefault();

    let sitename = document.getElementById("sitename").value.toLowerCase();
    let filename = "ml-" + sitename + ".html";
    let data = document.getElementById('preview').innerHTML;
    let file = new Blob([data], {type: 'text/html'});
    let a = document.createElement('a');
    let url = URL.createObjectURL(file);

    a.href = url;
    a.download = filename;
    document.getElementById("buttons").appendChild(a);
    a.click();
}

function changeSitename() {
    var els = document.getElementsByClassName('sitename');

    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        el.innerText = document.getElementById('sitename').value;
    });
}

function changeSiteurl() {
    var els = document.getElementsByClassName('siteurl');

    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        var url = document.getElementById('siteurl').value;
        el.innerText = url;
        el.setAttribute('href', url);
    });
}

function changeLegalmentionurl() {
    var els = document.getElementsByClassName('legalmentionurl');

    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        var url = document.getElementById('legalmentionurl').value;
        el.innerText = url;
        el.setAttribute('href', url);
    });
}

function changeLastupdate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = new Date(this.value);
    var text = date.toLocaleDateString('fr-FR', options);

    var els = document.getElementsByClassName('lastupdate');
    Array.prototype.forEach.call(els, function(el) {
        el.innerText = text;
    });
}

function changePersonaldata() {
    var els =  this.value.split('\n');

    var ul = document.createElement('ul');

    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        var li = document.createElement('li');
        li.innerText = el;

        ul.appendChild(li);
    });

    els = document.getElementsByClassName('personaldata');

    Array.prototype.forEach.call(els, function(el) {
        el.innerHTML = '';
        el.appendChild(ul);
    });
}

function changeAdminmail() {
    var els = document.getElementsByClassName('adminmail');

    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        var email = document.getElementById('adminmail').value;
        el.innerText = email;
        el.setAttribute('href', 'mailto:' + email);
    });
}

function changeDatacontrollername() {
    var els = document.getElementsByClassName('datacontrollername');

    Array.prototype.forEach.call(els, function(el) {
        el.innerText = document.getElementById('datacontrollername').value;
    });
}

function changeDatacontrolleremail() {
    var els = document.getElementsByClassName('datacontrolleremail');

    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        var email = document.getElementById('datacontrolleremail').value;
        el.innerText = email;
        el.setAttribute('href', 'mailto:' + email);
    });
}

function changeHostname() {
    var els = document.getElementsByClassName('hostname');

    Array.prototype.forEach.call(els, function(el) {
        el.innerText = document.getElementById('hostname').value;
    });
}

function changeHosturl() {
    var els = document.getElementsByClassName('hosturl');

    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        var url = document.getElementById('hosturl').value;
        el.innerText = url;
        el.setAttribute('href', url);
    });
}

function changeHostaddress() {
    var els = document.getElementsByClassName('hostaddress');

    Array.prototype.forEach.call(els, function(el) {
        el.innerText = document.getElementById('hostaddress').value;
    });
}

function changeCookies() {
    var els =  this.value.split('\n');

    var ul = document.createElement('ul');

    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        var li = document.createElement('li');
        li.innerText = el;

        ul.appendChild(li);
    });

    els = document.getElementsByClassName('cookies');

    Array.prototype.forEach.call(els, function(el) {
        el.innerHTML = '';
        el.appendChild(ul);
    });
}

function changeCookiespartners() {
    var els =  this.value.split('\n');

    var ul = document.createElement('ul');

    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        var li = document.createElement('li');
        li.innerText = el;

        ul.appendChild(li);
    });

    els = document.getElementsByClassName('cookiespartners');

    Array.prototype.forEach.call(els, function(el) {
        el.innerHTML = '';
        el.appendChild(ul);
    });
}

function changeTracking() {
    var els = document.getElementsByClassName('tracking');

    if (this.checked) {
        Array.prototype.forEach.call(els, function(el) {
            // Do stuff here
            el.style.display = "none";
        });
    } else {
        Array.prototype.forEach.call(els, function(el) {
            // Do stuff here
            el.style.display = "block";
        });
    }
}

function changeGeolocalisation() {
    var els = document.getElementsByClassName('geolocalisation');

    if (this.checked) {
        Array.prototype.forEach.call(els, function(el) {
            // Do stuff here
            el.style.display = "block";
        });
    } else {
        Array.prototype.forEach.call(els, function(el) {
            // Do stuff here
            el.style.display = "none";
        });
    }
}

function changeSchool() {
    var els = document.getElementsByClassName('school');

    if (this.checked) {
        Array.prototype.forEach.call(els, function(el) {
            // Do stuff here
            el.style.display = "block";
        });
    } else {
        Array.prototype.forEach.call(els, function(el) {
            // Do stuff here
            el.style.display = "none";
        });
    }
}

