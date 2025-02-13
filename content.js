let overlay; 

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'applyOverlay') {
      console.log("here in content: ", request.action)
      overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100vw";
            overlay.style.height = "100vh";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Dark overlay
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "9999";

            // Create image
            let img = document.createElement("img");
            img.src = "https://media-hosting.imagekit.io//fb8f9f5ee3044e2e/leethawk.png?Expires=1832481093&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jIrkUHmUG4-qxNPgUxzYaS5iavXJnDLKUCjw0Rh1iAC0oGBFkwKZ360qkI9GiHe-C7HwQbBdiNADPQf~55KXRlruyka4UdkczcpfEjsjvWLn8svRmGfppxdfuMJyeyPdbU05a4HGw6okJon9a1gtg2q6RP6g0e~w7v9HO3F2CDO4XiBV~BADCIbyIFS56UzuSNR~~4aBiFC15OyHoR~YGCrsL5HdErj4GMQuLQGBrZPbka2XT4PrlFxD36om3j68NsHMNlJ9y4hprYToyvjKCRMrp4K1q2vlDZzBIROaNuX8o2dybCi9htf2zrR1xEjmVseEv9JGb7RwyOSHybyEmg__"; // Replace with your image URL
            img.style.maxWidth = "100%";
            img.style.maxHeight = "100%";
            img.style.borderRadius = "10px";
            
            // Append image to overlay
            overlay.appendChild(img);

            // Add overlay to the page
            document.body.appendChild(overlay);
    }
    else if (request.action === 'removeOverlay') { 
        console.log("removing image")
        overlay.remove(); 
    }
  });
  





