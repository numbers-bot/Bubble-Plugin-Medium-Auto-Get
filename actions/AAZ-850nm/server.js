function(properties, context) {
   	const response = context.request('https://medium.com/'+properties.mediumID+'?format=json')
	let medium =  response.body.substr(16)
	let data = JSON.parse(medium);
    let post = data.payload.references.Post[properties.postID]
    return {
        title: post.title,
		content:post.content.subtitle,
        img: 'https://miro.medium.com/'+post.virtuals.previewImage.imageId,
     	link: 'https://medium.com/'+properties.mediumID+'/'+properties.postID,     
        input: properties.mediumID+properties.getpost,

    }
    console.log("request Not Supported!");
}