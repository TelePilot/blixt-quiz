import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: '00a2gpry',
	dataset: 'production',
	token: '', // or leave blank to be anonymous user
	useCdn: true, // `false` if you want to ensure fresh data
});
