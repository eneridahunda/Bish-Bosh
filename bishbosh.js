

	function myFunction()
	 {
			
			var bishValue = parseInt(document.getElementById("bish").value);
			var boshValue = parseInt(document.getElementById("bosh").value);
			var loopCount = parseInt(document.getElementById("LoopUntil").value);
			
			if ( (bishValue<=0)  || (boshValue<=0) || (loopCount<=0) )
			{
				document.getElementById("demo").innerHTML = " Input bör inte vara mindre än eller lika med noll";
			}
			else if ((loopCount < bishValue) || (loopCount < boshValue)) 
			{
				document.getElementById("demo").innerHTML = " Loopcount-värdet är mindre än Bish- eller Bosh-värdet";
			}
			else 
			{
				var text = "";
				for(var i=1; i<=loopCount;i++)
				{
						if ((i % bishValue == 0) && (i % boshValue == 0))
						{
							text += "Bish-Bosh" + "<br>";	
						}
						else if((i %bishValue == 0))
						{
							text += "Bish" + "<br>";
						}
						else if((i %boshValue == 0))
						{
							text += "Bosh" + "<br>"
						}
						else
						{
							text+= i + "<br>"	
						}
				}

				 document.getElementById("demo").innerHTML = text;

			}

	}

