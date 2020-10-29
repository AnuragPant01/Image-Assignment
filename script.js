function UploadImage() {
 
    var Upload = document.getElementById("Upload");
 
    
    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.png|.gif)$");
    if (regex.test(Upload.value.toLowerCase())) {
 
        if (typeof (Upload.files) != "undefined") {
            
            var reader = new FileReader();
            
            reader.readAsDataURL(Upload.files[0]);
            reader.onload = function (e) {
               
                var image = new Image();
 
                
                image.src = e.target.result;
                       
                
                image.onload = function () {
                    var height = this.height;
                    var width = this.width;
                    if (width < 600) {
                        alert("Upload another Image");
                        return false;
                    }else if (width > 600) {
                        alert("Crop the Image");
                        return false;
                    }
                    else alert("Image is of correct width");
                    return true;
                };
 
            }
        }
    } else {
        alert("Please select a valid Image file.");
        return false;
    }
}