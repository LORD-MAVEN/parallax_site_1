window.addEventListener('scroll', function(){
    this.document.getElementById('heading').style.marginLeft = this.window.scrollY * -1.8 + 'px';
    this.document.getElementById('mountain1').style.marginTop = this.window.scrollY * 0.2 + 'px';
    this.document.getElementById('stars').style.marginTop = this.window.scrollY * -0.3 + 'px';
    this.document.getElementById('stars').style.marginLeft = this.window.scrollY * 0.2 + 'px';
    this.document.getElementById('moon').style.marginTop= this.window.scrollY * 0.4 + 'px';
})
