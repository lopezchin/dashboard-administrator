CKEDITOR.plugins.add( 'media',
{	

	mediaUploader:function(){

	},
	mediaItemSelected: function(){
		$('body').on('click', '.cke_media__list li', function(){
			var self = $(this);

			$('.cke_media__list li').removeClass('is-active');
			self.addClass('is-active');
		});
	},
	mediaListPagination:function()
	{


		 var parent = this;

		var cntr = 2;
		$('body').on( 'click', '.load__more',function()
		{
			var innerHTML = parent.mediaList(cntr);
		 	$('.cke_media__list').append(innerHTML);
		 	cntr++;
		});
	},
	mediaList:function( totalAttachments )
	{
		var innerHTML = '';
		var totalRows = 0;

		var row = (totalAttachments) ? (parseInt(totalAttachments) - 1) * 30 : 0;


		$.ajax({
			url:baseURL+'media/library',
			async:false,
			data:
				{
					totalAttachments:row
			}, 
			success:function(data) {
				var media = JSON.parse(data);
				
				totalRows = media.totalRows;
				
				if( typeof media != 'undefined' && media.row.length != 0 )
				{
					for(var i = 0; i < media.row.length; i++)
					{
						var thumbURL = media.row[i]['meta_data']['sizes']['thumbnail'];
						var largeURL = media.row[i]['meta_data']['sizes']['large'];
						innerHTML += '<li class="media__attachment"><img data-largeSrc="'+baseURL+largeURL+'" width="50" src="'+ baseURL+thumbURL +'" /></li>'
						
					}
				}
			}
		});


		

		return innerHTML;
	},
	init: function( editor )
	{
		var self = this;

		editor.addCommand( 'mediaDialog',new CKEDITOR.dialogCommand( 'mediaDialog' ) );
		editor.ui.addButton( 'Media',
		{
			label: 'Insert Media',
			command: 'mediaDialog',
			icon: this.path + 'images/icon.png'
		} );
		CKEDITOR.dialog.add( 'mediaDialog', function( editor )
		{
			return {
				title : 'Media Library',
				minWidth : 700,
				minHeight : 300,
				contents :
				[
					{
						id : 'tab1',
						label : 'Select Existing',
						elements :
						[
							{
								type : 'html',
								id : 'id',
								html : '<ul class="cke_media__list">'+self.mediaList( 0 )+'</ul><a class="btn btn-primary load__more">Load More</a>'
							}
						]
					},
					// {
					// 	id : 'tab2',
					// 	label : 'Upload File',
					// 	elements :
					// 	[
					// 		{
					// 		    type: 'file',
					// 		    id: 'upload',
					// 		    label: 'Select file from your computer',
					// 		    size: 38
					// 		},
					// 		{
					// 		    type: 'fileButton',
					// 		    id: 'fileId',
					// 		    label: 'Upload file',
					// 		    'for': [ 'tab2', 'upload' ],
					// 		    filebrowser: {
					// 		        onSelect: function( fileUrl, data ) {
					// 		            alert( 'Successfully uploaded: ' + fileUrl );
					// 		        }
					// 		    }
					// 		}	 
					// 	]
					// }
				],
				onOk : function()
				{
					var img = $('.media__attachment.is-active img');

					if( img )
					{
						var src = img.attr('data-largeSrc');

						var media = editor.document.createElement('img');
						media.setAttribute('src', src)
						editor.insertElement(media);
					}
				}
			};
		} );

		this.mediaListPagination();
		this.mediaItemSelected();
	}
} );