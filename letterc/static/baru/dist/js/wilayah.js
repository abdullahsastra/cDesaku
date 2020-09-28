        function funcprovinsi() {
          var id = document.getElementById("selectprovinsi").value;
          $.ajax({
            url: '/provinsi/'+id,
            type: 'POST',
            success: function(response) {
                var select = document.getElementById('selectkabupaten');
                while (select.hasChildNodes()){
                  select.removeChild(select.firstChild);
                }
                for (var i=0;i<response.length;i++){  
                  var opt = document.createElement('option');
                  opt.value = response[i][0];
                  opt.innerHTML = response[i][2];
                  select.appendChild(opt);
                }

            },
            error: function(error) {
                console.log(error);
            }
          });
        }
        function funckabupaten() {
          var id = document.getElementById("selectkabupaten").value;
          $.ajax({
            url: '/kabupaten/'+id,
            type: 'POST',
            success: function(response) {
                var select = document.getElementById('selectkecamatan');
                while (select.hasChildNodes()){
                  select.removeChild(select.firstChild);
                }
                for (var i=0;i<response.length;i++){  
                  var opt = document.createElement('option');
                  opt.value = response[i][0];
                  opt.innerHTML = response[i][2];
                  select.appendChild(opt);
                }
            },
            error: function(error) {
                console.log(error);
            }
          });
        }
        function funckecamatan() {
          var id = document.getElementById("selectkecamatan").value;
          $.ajax({
            url: '/kecamatan/'+id,
            type: 'POST',
            success: function(response) {
                var select = document.getElementById('selectdesa');
                while (select.hasChildNodes()){
                  select.removeChild(select.firstChild);
                }
                for (var i=0;i<response.length;i++){  
                  var opt = document.createElement('option');
                  opt.value = response[i][0];
                  opt.innerHTML = response[i][2];
                  select.appendChild(opt);
                }
            },
            error: function(error) {
                console.log(error);
            }
          });
        }
        function cekemail() {
          var email = document.getElementById("email").value;
          $.ajax({
            url: '/cekemail/'+email,
            type: 'POST',
            success: function(response) {
              if (response == "1") {
                swal({   
                  title: "Email sudah digunakan!",  
                  text: "Silahkan gunakan email yang lain.", 
                  confirmButtonColor: "#ed6f56",   
                });
                return false;
              }
                console.log("email bisa digunakan.")
            },
            error: function(error) {
                console.log(error);
            }
          });
        }
        function changepassword(email) {
          //var email = document.getElementById("email").value;
          var newpass = document.getElementById("newpassword").value;
          console.log("newpass "+newpass);
          console.log("emial "+email);
          $.ajax({
            url: '/cekemail/'+email,
            type: 'POST',
            data : {newpassword:newpass},
            success: function(response) {
              if (response == 1) {
                console.log("sukses");
                swal({   
                  title: "good job!",   
                  type: "success", 
                  text: "Password berhasil diubah.",
                  confirmButtonColor: "#2ecd99",   
                });
                return false;
              } else {
                console.log("false");
                swal({   
                  title: "Warning!",   
                  type: "warning", 
                  text: "Password Gagal diubah.",
                  confirmButtonColor: "#2ecd99",   
                });
                return false;
              }
            },
            error: function(error) {
                console.log(error);
            }
          });
        }
        function formpenggunaedit() {
          var post_url = $(this).attr("action");
          var form_data = $(#formpenggunaedit).serialize();
          $.ajax({
            url: post_url,
            type: 'POST',
            data : form_data
            success: function(response) {
                console.log("sukses");
            },
            error: function(error) {
                console.log(error);
            }
          });
        }