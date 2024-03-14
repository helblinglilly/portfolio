import { useState } from "react";
import Layout from "../../Layouts/Layout";
import PostPreviews, {
	BlogMetaInfo,
	MetaInfo,
	Tags,
} from "../../components/Blog/PostPreviews";
import AllPosts from "../../components/Blog/AllPosts";
import SocialPreview from "../../components/SocialPreview";

export default function Blog() {
	const metaInfo: MetaInfo = {
		title: "Lilly's Blog",
		socialSummary: `Stuff that I've written.`,
		authorName: "Lilly Helbling",
		cover: null,
	};

	const [visiblePosts, setVisiblePosts] = useState<BlogMetaInfo[]>(AllPosts);
	const [isSearchVisible, setSearchVisibility] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<RegExp>(/.*/);

	const uniqueTagLabels = (): Tags[] => {
		// TODO there must be a better way of doing this
		// But tags don't have the same object reference to use Set... to get them unique
		let tagNames: string[] = [];
		AllPosts.flatMap((post) => {
			post.tags.forEach((tag) => {
				if (!tagNames.includes(tag.name)) tagNames.push(tag.name);
			});
		});

		const realTabs: Tags[] = [];

		AllPosts.flatMap((post) => {
			post.tags.forEach((tag) => {
				if (tagNames.includes(tag.name)) {
					tagNames.splice(tagNames.indexOf(tag.name), 1);
					realTabs.push(tag);
				}
			});
		});

		return realTabs.sort((a, b) => (a.name > b.name ? 1 : -1));
	};

	const uniqueYears = (): number[] => {
		const years: number[] = [];
		AllPosts.flatMap((post) => {
			if (!years.includes(new Date(post.created).getFullYear()))
				years.push(new Date(post.created).getFullYear());
		});
		return years.sort((a, b) => (a < b ? 1 : -1));
	};

	const [selectedTags, setSelectedTags] = useState<Tags[]>([]);
	const [selectedYears, setSelectedYears] = useState<number[]>([]);

	const toggleMobileSearchVisibility = () => {
		setSearchVisibility(!isSearchVisible);
	};

	const updateSearchTerm = (term: string) => {
		if (!term) setSearchTerm(/.*/);
		else setSearchTerm(new RegExp(term.toLocaleLowerCase()));
		refreshVisiblePosts();
	};

	const updateTags = (changingTag: Tags, isChecked: boolean) => {
		const newTags = selectedTags;
		if (isChecked) {
			newTags.push(changingTag);
		} else {
			newTags.splice(newTags.indexOf(changingTag), 1);
		}
		setSelectedTags(newTags);

		refreshVisiblePosts();
	};

	const updateYears = (changingYear: number, isChecked: boolean) => {
		const newYears = selectedYears;
		if (isChecked) {
			newYears.push(changingYear);
		} else {
			newYears.splice(newYears.indexOf(changingYear), 1);
		}
		setSelectedYears(newYears);

		refreshVisiblePosts();
	};

	const refreshVisiblePosts = () => {
		const postsToDisplay: BlogMetaInfo[] = [];
		AllPosts.forEach((post) => {
			const searchMatches = [];
			let containsMatchingTag = selectedTags.length === 0;
			let matchesYear = selectedYears.length === 0;

			searchMatches.push(searchTerm.test(post.authorName.toLowerCase()));
			searchMatches.push(searchTerm.test(post.blogSummary.toLowerCase()));
			searchMatches.push(searchTerm.test(post.link.toLowerCase()));
			searchMatches.push(searchTerm.test(post.title.toLowerCase()));
			post.tableOfContents.forEach((entry) => {
				searchMatches.push(searchTerm.test(entry.title.toLowerCase()));
			});
			post.tags.forEach((tag) => {
				searchMatches.push(searchTerm.test(tag.name.toLowerCase()));
				selectedTags.forEach((selectedTag) => {
					if (selectedTag.name === tag.name)
						containsMatchingTag = true;
				});
			});

			selectedYears.forEach((year) => {
				if (new Date(post.created).getFullYear() === year)
					matchesYear = true;
			});

			if (
				searchMatches.includes(true) &&
				containsMatchingTag &&
				matchesYear
			)
				postsToDisplay.push(post);
		});

		setVisiblePosts(postsToDisplay);
	};

	return (
		<Layout>
			<SocialPreview metaInfo={metaInfo} />

			<div className="column is-one-quarter">
				<div className="desktop title sidebar">
					<p className="is-3">Filter</p>
				</div>

				<div
					className="card mb-2 mobile"
					onClick={toggleMobileSearchVisibility}
				>
					<div className="card-header">
						<div className="card-header-title pimrary">
							<p>{isSearchVisible ? "Hide" : "Show"} Filters</p>
						</div>
					</div>
				</div>

				<div className={isSearchVisible ? "card" : "card mobileHidden"}>
					<div className="card-content" data-cy="blogSearchCard">
						<input
							className="input"
							placeholder="Search term..."
							onChange={(event) => {
								updateSearchTerm(event.target.value);
							}}
						></input>

						<p className="title is-5 mb-2 pt-4">Posted in year</p>
						{uniqueYears()
							.sort()
							.map((year) => {
								return (
									<div
										className="pt-2 accented"
										key={year}
										data-cy="yearLabels"
									>
										<label className="checkbox">
											<input
												key={year}
												className="mr-2"
												type="checkbox"
												onChange={(event) =>
													updateYears(
														year,
														event.target.checked
													)
												}
											/>
											{year}
										</label>
									</div>
								);
							})}
						<p className="title is-5 mb-2 pt-4">Tags</p>
						{uniqueTagLabels().map((tag) => {
							return (
								<div
									className="pt-2 accented"
									key={tag.name}
									data-cy="postCategoryLabels"
								>
									<label className="checkbox">
										<input
											key={tag.name}
											className="mr-2"
											type="checkbox"
											onChange={(event) =>
												updateTags(
													tag,
													event.target.checked
												)
											}
										/>
										{tag.name}
									</label>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="column is-three-quarters" id="main-content">
				<p className="title is-3">Blog Posts</p>
				<PostPreviews posts={visiblePosts} />
			</div>
		</Layout>
	);
}