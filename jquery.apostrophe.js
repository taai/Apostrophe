/* Apostrophe - latvian keyboard layout plugin for jQuery
 * @version: 1.0 (2012-MAR-25)
 * @license: MIT (free!)
 * @author: Taai (https://github.com/taai)
 */
;(function($){
// avoid non-existing jQuery and/or plugin overwrite
if (!$ || $.fn.apostrophe) return;


// contains active character code - apostrophe (') or quotation mark (")
var a = null;

// latvian alphabet character map (ascii » utf8)
var map = {65:256,67:268,69:274,71:290,73:298,75:310,76:315,78:325,79:332,82:342,83:352,85:362,90:381,97:257,99:269,101:275,103:291,105:299,107:311,108:316,110:326,111:333,114:343,115:353,117:363,122:382};


/**
 * @param false to disable
 * @return chainable object
 */
$.fn.apostrophe = function(enable) {
	
	// unbind keypress event, avoid duplicates
	this.unbind('keypress.apostrophe');
	
	// reset
	a = null;
	
	// deactivate the plugin
	if (enable == false) return this;
	
	
	// bind keypress event
	this.bind('keypress.apostrophe', function(e) {
		
		// ignore all other symbols which are not in latin alphabet
		if (e.which < 32 || e.which > 126) return;
		
		
		if (a) {
			
			var chr = map[e.which], // get the character code from the map
					c = String.fromCharCode(chr || a), // character to be inserted
					top = this.scrollTop,
					left = this.scrollLeft;
			
			
			// if character found in map, ignore the recent character
			if (chr) e.preventDefault();
			
			
			// replace the insert the character
			if (document.selection) { /* IE and Opera */
				var range = document.selection.createRange();
				range.text = c;
				range.select();
			} else {
				var i = this.selectionStart;
				this.value = this.value.substring(0, i) + c + this.value.substring(this.selectionEnd);
				i++;
				this.setSelectionRange(i, i);
			}
			
			
			// scroll back in place
			this.scrollTop = top;
			this.scrollLeft = left;
			
			// reset
			a = null;
			
		} else if (e.which == 34 || (e.which == 39 && e.originalEvent.which !== 0)) { /* added bugfix for Opera browser */
			
			// ignore the recent character
			e.preventDefault();
			
			// store the charcode of apostrophe (') or quotation mark (")
			a = e.which;
			
		}
	});
	
	
	// keep it chainable
	return this;
};


})(jQuery);