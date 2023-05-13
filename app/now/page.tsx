import { H1Styles } from '../../constants/style-constants';
import { CustomLink } from '../../components/Mdx';

const Now = () => {
	return (
		<div>
			<section>
				<h1 className={H1Styles}>Now</h1>

				<section className={'prose-lg lg:prose-xl pt-4'}>
					<p>
						This is where I document what I am up to now. Inspired by{' '}
						<CustomLink href="https://sive.rs/now">Derek siver&apos;s now page</CustomLink>. I keep updating
						this page every weekend
					</p>

					<ul className="list-disc">
						<li>
							Working on revamping how people see and manage money at{' '}
							<CustomLink href="https://refyne.co.in">Refyne</CustomLink>
						</li>
						<li>Trying to deeply understand Typescript</li>
						<li>
							Thinking about working on small, short, fun projects. (like{' '}
							<CustomLink href="https://lifecounter.vercel.app/">Life counter</CustomLink>)
						</li>
						<li>
							Trying to meet and talk to people who are not in technology, to get different perspectives
						</li>
					</ul>
				</section>
			</section>
		</div>
	);
};

export default Now;