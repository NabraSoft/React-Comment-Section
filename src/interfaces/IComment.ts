export interface Comment {
	id: string | number;
	comment: string;
	user: {
		id: string | number;
		name: string;
		image: string;
	};
	likeCounts: number;
	repliesCount: number;
	created: string;
	replies: Comment[];
}
