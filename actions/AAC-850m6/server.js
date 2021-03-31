function(properties, context) {
	const response = context.request('https://medium.com/'+properties.mediumID+'?format=json')
	let medium =  response.body.substr(16)
	let data = JSON.parse(medium);
    let posts = [];
    for (const [key, value] of Object.entries(data.payload.references.Post)) {
      posts.push(key)
    }
    let post0 = data.payload.references.Post[posts[0]]
    let post1 = data.payload.references.Post[posts[1]]
    let post2 = data.payload.references.Post[posts[2]]
    return {
            input: properties.mediumID,
          	title0: post0.title,
          	title1: post1.title,
          	title2: post2.title,
        	content0:post0.content.subtitle,
        	content1:post1.content.subtitle,
			content2:post2.content.subtitle,
        	img0: 'https://miro.medium.com/'+post0.virtuals.previewImage.imageId,
     		img1: 'https://miro.medium.com/'+post1.virtuals.previewImage.imageId,
     		img2:'https://miro.medium.com/'+post2.virtuals.previewImage.imageId,
     		link0: 'https://medium.com/'+properties.mediumID+'/'+posts[0],
     		link1: 'https://medium.com/'+properties.mediumID+'/'+posts[1],
     		link2: 'https://medium.com/'+properties.mediumID+'/'+posts[2],
    }
    console.log("request Not Supported!");
}