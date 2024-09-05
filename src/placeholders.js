const tweetsData = [
	{
		author: {
			name: "Alice Johnson",
			username: "alice_j",
			image: "",
		},
		tweet:
			"Posting a bounty was seamless, and I got my project done faster than expected. The quality of work was outstanding!",
		time: "2023-08-15T14:32:00Z",
		source: "Web",
		permalink: "https://example.com/tweets/1",
	},
	{
		author: {
			name: "Michael Smith",
			username: "mike_smith",
			image: "",
		},
		tweet:
			"I found a bounty that matched my skills perfectly. Completing it was a breeze, and I got paid instantly. Great platform!",
		time: "2023-08-18T09:45:00Z",
		source: "Mobile",
		permalink: "https://example.com/tweets/2",
	},
	{
		author: {
			name: "Samantha Lee",
			username: "samantha_lee",
			image: "",
		},
		tweet:
			"This platform made it easy to get my task done quickly. The bounty system is a game-changer for getting work done efficiently.",
		time: "2023-07-20T16:50:00Z",
		source: "Web",
		permalink: "https://example.com/tweets/3",
	},
	{
		author: {
			name: "David Brown",
			username: "dave_brown",
			image: "",
		},
		tweet:
			"As a freelancer, finding bounties to work on has been a great way to showcase my skills and earn consistently. Highly recommend!",
		time: "2023-09-01T13:10:00Z",
		source: "Web",
		permalink: "https://example.com/tweets/4",
	},
	{
		author: {
			name: "Emily Davis",
			username: "emily_d",
			image: "",
		},
		tweet:
			"I posted a complex task as a bounty, and within hours, I had a top-notch solution. The platform is a must for anyone needing quick, quality work.",
		time: "2023-08-30T11:25:00Z",
		source: "Mobile",
		permalink: "https://example.com/tweets/5",
	},
	{
		author: {
			name: "Chris Martinez",
			username: "chris_mart",
			image: "",
		},
		tweet:
			"The bounty I completed was well worth the effort. Payment was quick, and I enjoyed the challenge. Will definitely be back for more.",
		time: "2023-07-25T18:40:00Z",
		source: "Web",
		permalink: "https://example.com/tweets/6",
	},
	{
		author: {
			name: "Jessica Wilson",
			username: "jessica_wilson",
			image: "",
		},
		tweet:
			"I was amazed at how fast the work was delivered after I posted a bounty. The platform exceeded my expectations.",
		time: "2023-08-10T07:15:00Z",
		source: "Web",
		permalink: "https://example.com/tweets/7",
	},
	{
		author: {
			name: "John Doe",
			username: "john_doe",
			image: "",
		},
		tweet:
			"Finding and completing bounties here has been a great way to grow my portfolio and get paid for doing what I love.",
		time: "2023-09-03T12:50:00Z",
		source: "Mobile",
		permalink: "https://example.com/tweets/8",
	},
	{
		author: {
			name: "Linda Thompson",
			username: "linda_thompson",
			image: "",
		},
		tweet:
			"The process of posting a bounty was so simple, and the quality of submissions was top-tier. I'll definitely use this platform again.",
		time: "2023-07-30T14:30:00Z",
		source: "Web",
		permalink: "https://example.com/tweets/9",
	},
	{
		author: {
			name: "Robert Green",
			username: "robert_green",
			image: "",
		},
		tweet:
			"I completed a bounty and got paid almost immediately. The transparency and efficiency here are second to none.",
		time: "2023-08-05T16:20:00Z",
		source: "Web",
		permalink: "https://example.com/tweets/10",
	},
	{
		author: {
			name: "Amy Clark",
			username: "amy_clark",
			image: "",
		},
		tweet:
			"Posting a bounty was straightforward, and I was impressed with the professionalism of the responses. The work was top-notch.",
		time: "2023-08-22T10:45:00Z",
		source: "Mobile",
		permalink: "https://example.com/tweets/11",
	},
	{
		author: {
			name: "Kevin White",
			username: "kevin_white",
			image: "",
		},
		tweet:
			"This platform is a goldmine for freelancers. Completing bounties has been a great way to earn while working on exciting projects.",
		time: "2023-07-18T09:35:00Z",
		source: "Web",
		permalink: "https://example.com/tweets/12",
	},
	{
		author: {
			name: "Natalie Baker",
			username: "natalie_baker",
			image: "",
		},
		tweet:
			"I posted a bounty and got my task done quicker than I could have imagined. The platform is user-friendly and highly efficient.",
		time: "2023-08-12T15:20:00Z",
		source: "Mobile",
		permalink: "https://example.com/tweets/13",
	},
	{
		author: {
			name: "Daniel Carter",
			username: "daniel_carter",
			image: "",
		},
		tweet:
			"I love the variety of bounties available. I've been able to find work that suits my skills perfectly and get paid promptly.",
		time: "2023-08-28T11:50:00Z",
		source: "Web",
		permalink: "https://example.com/tweets/14",
	},
	{
		author: {
			name: "Sophia Hill",
			username: "sophia_hill",
			image: "",
		},
		tweet:
			"The platform made it incredibly easy to post a bounty and get high-quality work delivered in no time. Highly recommend!",
		time: "2023-09-01T14:05:00Z",
		source: "Mobile",
		permalink: "https://example.com/tweets/15",
	},
];

const faqs = [
	{
		question: "What is a bounty on Gibwork?",
		answer:
			"A bounty on Gibwork is a paid task where creators define specific requirements and offer a reward for its completion. Solvers can take on these tasks and earn rewards upon successful delivery.",
	},
	{
		question: "How do I solve a bounty and get paid?",
		answer:
			"To solve a bounty, browse available tasks, select one that matches your skills, and submit your solution. Once the bounty poster approves your work, payment will be sent instantly via Solana's blockchain.",
	},
	{
		question: "How are transactions secured on Gibwork?",
		answer:
			"All transactions on Gibwork are secured using Solana's smart contracts and decentralized technology, ensuring transparency, immutability, and fast payments without intermediaries.",
	},
	{
		question: "How do I receive payments for completing a bounty?",
		answer:
			"After successfully completing a bounty and having your work approved, your payment will be automatically processed and transferred to your connected Solana wallet.",
	},
	{
		question: "Can I post multiple bounties at once?",
		answer:
			"Yes, you can post multiple bounties simultaneously on Gibwork. Each bounty can have its own requirements, deadlines, and rewards.",
	},
	{
		question: "Can I participate from any country?",
		answer:
			"Yes, Gibwork is available to users worldwide. As long as you have access to Solana's blockchain and a compatible wallet, you can post or solve bounties from any country.",
	},
	{
		question:
			"Are there any limits to the number of bounties I can post or solve?",
		answer:
			"There are no limits to the number of bounties you can post or solve on Gibwork. You are free to engage with as many tasks as you like.",
	},
];

export { tweetsData, faqs };
