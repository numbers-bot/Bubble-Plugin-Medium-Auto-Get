function(properties, context) {
	const response = context.request('https://medium.com/numbers-protocol?format=json')
	let DB =  response.body.substr(16)
	let data = JSON.parse(DB);
    let post0 = data.payload.references.Post["3bfb52321bdd"]
    let post1 = data.payload.references.Post["689bfd572ff5"]
    let post2 = data.payload.references.Post["293bd787e608"]
    //throw Error(DB)
    return {
            json: "responseresponseresponseresponse",
          title0: post0.title,
          title1: post1.title,
          title2: post2.title,
        content0:post0.content.subtitle,
        content1:post1.content.subtitle,
		content2:post2.content.subtitle,
        arry:  [post0.title,post0.title,post0.title],
        input: properties.getpost,
        img0: 'https://miro.medium.com/'+post0.virtuals.previewImage.imageId,
     img1: 'https://miro.medium.com/'+post1.virtuals.previewImage.imageId,
     img2:'https://miro.medium.com/'+post2.virtuals.previewImage.imageId,
     link0: 'https://medium.com/numbers-protocol/beginners-guide-to-filecoin-macos-293bd787e608',
     link1: 'https://medium.com/numbers-protocol/beginners-guide-to-filecoin-macos-293bd787e608',
     link2: 'https://medium.com/numbers-protocol/beginners-guide-to-filecoin-macos-293bd787e608',
        
    }
    //let DB =  response.body.substr(16)
    //let post = DB.payload.references.Post["3bfb52321bdd"]
	//return {
   //     json: "response",
   //     title: post.title,
   //     content: post.content,
   //     titles:  [{title:post.title},{title:post.title},{title:post.title}],
   //     arry:  [post.title,post.title,post.title],
   //     acceptedAt: 0,
   //     Image_Link: 0,
   //     medium: 0,
   //     previewImage: 0,
    //    originalWidth: 0,
  //      originalHeight: 0,
   //     imageId: 0
   //    
   // };
	//return Object.keys(response)
    //https://medium.com/numbers-protocol?format=json
    console.log("request Not Supported!");
}