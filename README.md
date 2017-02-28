# gaia_challenge
This is a work in progress

Code works, but needs proper error handling and setup for testing

I setup mocked data, as well as the live connections so that it would
eliminate the need for unnecessay hits against the supporting web service.

#To enable with live data: (any or all of them)
{Planning these refactor these, as most of the code between the 3 files is identical}

app/vid_utils/getMediabyNid.js (uncomment line 14, and comment line 15 ) 
            //return apiRequest(mediaUrl);
            return fs.readFileAsync('./app/api_mock/media.json');
            
app/vid_utils/getTermsByTid.js  (uncomment line 14, and comment line 15 ) 
            //return apiRequest(termsUrl);
            return fs.readFileAsync('./app/api_mock/term.json');
            
gaia_challenge/app/vid_utils/getVocabByTid.js (uncomment line 14, and comment line 15 )
            //return apiRequest(vocabUrl);
            return fs.readFileAsync('./app/api_mock/vocab.json');









