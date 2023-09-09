type DescriptionProps = {
	name: string;
	category: string;
	price: string;
};

export const Description = ({ category, name, price }: DescriptionProps) => {
	return (
		<div className="mt-2 flex flex-col gap-1">
			<div>
				<h3 className="text-lg font-semibold leading-5 text-gray-700">{name}</h3>
				<span className="text-md text-gray-500">{category}</span>
			</div>
			<span className="text-sm font-medium text-gray-500">{price}</span>
		</div>
	);
};
