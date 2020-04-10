var imageViewer = {
	_images : [ {
		name : '국화',
		file : 'Chrysanthemum.jpg'
	}, {
		name : '사막',
		file : 'Desert.jpg'
	}, {
		name : '수국',
		file : 'Hydrangeas.jpg'
	}, {
		name : '해파리',
		file : 'Jellyfish.jpg'
	}, {
		name : '코알라',
		file : 'Koala.jpg'
	}, {
		name : '등대',
		file : 'Lighthouse.jpg'
	}, {
		name : '펭귄',
		file : 'Penguins.jpg'
	}, {
		name : '툴립',
		file : 'Tulips.jpg'
	} ],
	_changeImg : function() {
		var index = Math.floor( Math.random() * imageViewer._images.length );
		var info = imageViewer._images[index];
		$('.image-viewer img').attr({
			'src':'images/'+info.file,
			'alt': info.name,
			'title': info.name
			});
		
	},
	_onImageDblClicked:function(){
		var name = $(this).attr('alt');
		console.log(name);
	},
	init : function() {
		$(function() {
			$('#btn-change').click(imageViewer._changeImg);
			$('.image-viewer img').dblclick(imageViewer._onImageDblClicked)
			.mousedown(imageViewer._changeImg);
		})
	}
}