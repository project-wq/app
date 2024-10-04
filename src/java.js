var preloaderTimeout = 2000; 
setTimeout(function() {
	document.querySelector('.preloader').style.display = 'none';
}, preloaderTimeout);
document.getElementById('loading-text').classList.add('typewriter');