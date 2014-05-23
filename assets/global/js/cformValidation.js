(function($){
	
	$.fn.cformValidation = function()
	{
		var form = (this);

		form.submit(function(e)
		{
			e.preventDefault();
			
			$('.l-error').remove();

			$.ajax({
				url: form.attr('action'),
				type:'POST',
				data: form.serialize(),
				dataType:'json',
				async:false,
				success:function(response)
				{
					if(response.validation_failed) 
					{
						for(err in response.errors)
						{
							$('input[name^="'+ err +'"]').after('<span class="l-error">'+ response.errors[err] +'</span>')
						}
					}
				}
			})
			return false;
		});

	}


})(jQuery);