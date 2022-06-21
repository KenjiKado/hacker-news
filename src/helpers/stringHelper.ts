export const formatUrl = (url: string) => {
	return `${new URL(url).hostname}`;
};