import React from "react";

export default function Footer() {
	return (
		<div
			className="relative h-[80vh]"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="fixed bottom-0 h-[80vh] w-full bg-neutral-600">
				<div className="w-full h-full flex items-end">
					<h1 className="text-9xl">Footer</h1>
				</div>
			</div>
		</div>
	);
}
