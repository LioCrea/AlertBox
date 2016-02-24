			function alertBox(type,myMessage,crossHair){
				var body, alertBox, closeButton, closeButtonText, cross, crossText;
				body = document.body;
		
				if(crossHair == undefined)
					crossHair = true;
				if(type != 'warning' && type != 'thankYou'){	
					myMessage = type;
					console.log('type is undefined');	
					console.log('myMessage: '+myMessage);		
					console.log('type: '+type);			
					console.log('crossHair: '+crossHair);	
				}
				alertBox = document.createElement('DIV');
				alertBox.setAttribute('class','alertBox');
				body.appendChild(alertBox);
							
				alertBox.style.display = 'inline-block';
				alertBox.style.position = 'fixed';
				alertBox.style.zIndex = '100000000';
				alertBox.style.opacity = '0';
				alertBox.style.top = '50%';
				alertBox.style.left = '50%';
				alertBox.style.webkitTransform = 'translate(-50%,-50%)';
				alertBox.style.transform = 'translate(-50%,-50%)';			
				alertBox.style.padding = '60px';	

				alertBox.style.textAlign = 'center';	
				alertBox.style.border = '4px solid white';		
				alertBox.style.borderRadius = '15px';						
				alertBox.style.fontFamily = 'CaviarDreams';			
				alertBox.style.color = 'white';				
				alertBox.style.fontSize = '22px';			
				alertBox.style.transition = '.2s';	
				setTimeout(function(){
					alertBox.style.opacity = '1';
				},100);
				alertBox.style.boxShadow="5px 0px 5px rgba(0,0,0,.5)"
				alertBox.innerHTML = myMessage;
				
				closeButton = document.createElement('BUTTON');
				closeButton.setAttribute('class','closeAlert');
				closeButtonText = document.createTextNode('ok'); 
				closeButton.appendChild(closeButtonText);
				alertBox.appendChild(closeButton);	
				
				closeButton.style.width = '100px';
				closeButton.style.height = '40px';
				closeButton.style.border = '2px solid white';
				closeButton.style.fontSize = '26px';
				closeButton.style.cursor = 'pointer';
				
				if(crossHair==true){
					cross = document.createElement('DIV');
					cross.setAttribute('class','cross');
					crossText = document.createTextNode('X');
					cross.appendChild(crossText);
					alertBox.appendChild(cross);
					cross.style.position = 'absolute';
					cross.style.top = '-15px';
					cross.style.right = '-15px';
					cross.style.width = '30px';
					cross.style.height = '30px';
					cross.style.padding = '5px';
					cross.style.borderRadius = '30px';
					cross.style.lineHeight = '30px';
					cross.style.border = '4px solid white';
					cross.style.fontFamily = 'Trebuchet MS';
					cross.style.fontWeight = 'bold';
					cross.style.cursor = 'pointer';
					if(type == 'warning'){
						cross.style.background = '#e74c3c';	
					}else if(type == 'thankYou'){
						cross.style.background = '#3498db';
					}else{ // default behavior, if "type" isn't passed
						myMessage = type;
						cross.style.background = '#95a5a6';	
					}
				cross.addEventListener('click',function(){
						alertBox.style.opacity = '0';
						setTimeout( function(){
							alertBox.style.display = 'none';
						},250);
					},false);							
				}

				if(type == 'warning'){
					alertBox.style.background = '#e74c3c';	
				}else if(type == 'thankYou'){
					alertBox.style.background = '#3498db';
				}else{ // default behavior, if "type" isn't passed
					myMessage = type;
					alertBox.style.background = '#95a5a6';	
				}
				
				closeButton.addEventListener('click',function(){
						alertBox.style.opacity = '0';
						setTimeout( function(){
							alertBox.style.display = 'none';
						},250);
					},false);
			}
