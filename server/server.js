Meteor.startup(function() {
	if (Posts.find().count()=== 0) {
		var names = [{title: "What is HTML?",
					  body: "WTF is HTML anyways..."
					  },
					  {title: "Why is the sky blue?",
					  body: "I mean I get people THINK it's blue buth who's to say"
					  },
					  {title: "Does anyone else hate simple get started tutorials?",
					  body: "It seems like everyone of those is whack."
					  }
					 ];
		for (var i = 0; i < names.length; i ++) {
			Posts.insert({title:names[i].title, body: names[i].body, score: 0});
		}
	}					
 });