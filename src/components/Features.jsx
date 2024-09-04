import { VscNoNewline } from "react-icons/vsc";
import BlurFade from "./BlurFade";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
import { CiBadgeDollar } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { BiMessageAltEdit } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);
const Features = () => {
	useGSAP(() => {}, []);

	return (
		<section className="mt-36 border-t border-gray-200">
			<div className="border-b border-gray-200">
				<div className="py-8 w-[80%] mx-auto flex md:flex-row flex-col justify-between border border-y-0 border-gray-200">
					<div className="flex justify-center items-end pl-4">
						<h1 className="text-gray-900 font-neue font-medium text-5xl">
							What is{" "}
							<span className="text-violet-500 font-semibold">
								<em>Gibwork</em>
							</span>{" "}
							?
						</h1>
					</div>
					<div className="flex justify-end items-end pr-4 pl-4 pt-4 md:pl-0 md:pt-0">
						<p className="text-sm text-gray-500 max-w-3xl">
							Gibwork is the ultimate platform for connecting talent with
							opportunities in a decentralized, secure environment. Whether
							you're posting or solving a bounty, our platform leverages
							Solana's blockchain for seamless, transparent, and instant
							transactions. A bounty is a paid task where creators set specific
							requirements and rewards for completion. Join a global community
							of skilled professionals and innovators, where ideas come to life
							and talent is rewarded.
						</p>
					</div>
				</div>
			</div>
			<div className="border-b border-gray-200">
				<div className="bg-gray-600  mx-auto w-[80%] border border-y-0 border-gray-200">
					<div className="mx-auto max-w-8xl text-gray-500">
						<div className="relative">
							<div className="relative z-10 grid  grid-cols-6">
								<div className="col-span-full hover:-translate-y-2 duration-300 lg:col-span-2 overflow-hidden flex justify-center relative p-8 bg-[#fbfbfc] hover:border-t lg:border-b border-gray-200">
									<BlurFade yOffset={10} duration={0.6} delay={0.2}>
										<div className="size-fit m-auto relative flex flex-col justify-center items-center">
											<div className="relative h-24 w-56 flex items-center justify-center">
												<svg
													className="absolute inset-0 size-full text-gray-400"
													viewBox="0 0 254 104"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
														fill="currentColor"
													></path>
												</svg>
												<span className="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 dark:from-blue-400 dark:to-pink-400">
													100%
												</span>
											</div>
											<h2 className="mt-6 text-center font-semibold text-gray-800 text-3xl">
												On Chain Transactions
											</h2>
										</div>
									</BlurFade>
								</div>
								<div className="feature-row col-span-full hover:-translate-y-2 duration-300 sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 l bg-[#fbfbfc] border-y lg:border-l lg:border-t-0 hover:border-t border-gray-200 ">
									<BlurFade yOffset={10} duration={0.6} delay={0.2}>
										<div>
											<div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-black/5 dark:border-black/10 before:absolute before:-inset-2 before:border dark:before:border-black/5 dark:before:bg-black/5 before:rounded-full">
												<svg
													className="w-24 m-auto h-fit"
													viewBox="0 0 212 143"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														className="text-gray-400 dark:text-gray-600"
														d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z"
														fill="currentColor"
													></path>
													<g clipPath="url(#clip0_0_1)">
														<path
															d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z"
															fill="url(#paint0_linear_0_1)"
														></path>
													</g>
													<path
														className="text-violet-600 dark:text-violet-500"
														d="M3 72H209"
														stroke="currentColor"
														strokeWidth="6"
														strokeLinecap="round"
													></path>
													<defs>
														<linearGradient
															id="paint0_linear_0_1"
															x1="106.385"
															y1="1.34375"
															x2="106"
															y2="72"
															gradientUnits="userSpaceOnUse"
														>
															<stop
																stopColor="white"
																stopOpacity="0"
																style={{
																	stopColor: VscNoNewline,
																	stopOpacity: 0,
																}}
															></stop>
															<stop
																className="text-violet-600 dark:text-violet-500"
																offset="1"
																stopColor="currentColor"
															></stop>
														</linearGradient>
														<clipPath id="clip0_0_1">
															<rect
																width="129"
																height="72"
																fill="white"
																style={{ fill: "white", fillOpacity: 1 }}
																transform="translate(41)"
															></rect>
														</clipPath>
													</defs>
												</svg>
											</div>
											<div className="mt-6 text-center relative z-10 space-y-2">
												<h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 ">
													Secure by default
												</h2>
												<p className="text-gray-500">
													Built-in security with Solana's smart contracts and
													decentralized technology.
												</p>
											</div>
										</div>
									</BlurFade>
								</div>
								<div className="feature-row col-span-full hover:-translate-y-2 duration-300 sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 bg-[#fbfbfc] border-t-0 border-b  sm:border-l sm:border-y lg:border-l lg:border-t-0 hover:border-t border-gray-200">
									<BlurFade yOffset={10} duration={0.6} delay={0.2}>
										<div>
											<div className="mt-5">
												<svg
													className="w-full"
													version="1.1"
													id="Layer_1"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 450 450"
													width="100px"
													height="100px"
													fill="#78716c"
													transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
												>
													<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
													<g
														id="SVGRepo_tracerCarrier"
														strokeLinecap="round"
														strokeLinejoin="round"
														stroke="#CCCCCC"
														strokeWidth="0.98002"
													></g>
													<g id="SVGRepo_iconCarrier">
														{" "}
														<g>
															{" "}
															<g>
																{" "}
																<rect
																	id="XMLID_60_"
																	x="-14.319"
																	y="147.421"
																	transform="matrix(0.3244 -0.9459 0.9459 0.3244 -125.6895 185.1588)"
																	style={{ fill: "#acacac" }}
																	width="162.194"
																	height="66.298"
																></rect>{" "}
																<path d="M169.994,106.097l-6.1,3c-7.6,3.7-16.5,4.2-24.4,1.4l-10.2-3.6c-0.6-0.4-1.2-0.7-1.8-0.9l-62.8-21.5 c-4.7-1.6-9.9,0.9-11.5,5.6l-52.7,153.5c-0.8,2.3-0.6,4.8,0.4,6.9s2.9,3.8,5.2,4.6l62.7,21.5c1,0.3,2,0.5,2.9,0.5 c3.8,0,7.3-2.4,8.6-6.1l49.7-144.6l3.4,1.2c12.5,4.4,26.5,3.6,38.5-2.2l6.1-3c7.5-3.7,16.3-4.2,24.2-1.5l115.3,39.7 c-1.2,4.8-3.6,10.5-8,13.6c-4.9,3.4-12.2,3.4-21.8,0.1l-51.4-17.6c-2.4-0.8-5-0.6-7.2,0.6c-2.2,1.2-3.8,3.3-4.5,5.7 c-0.1,0.3-7.2,26.9-29.9,39.1c-14.3,7.7-32.1,8-53,0.9c-4.7-1.6-9.9,0.9-11.5,5.6c-1.6,4.7,0.9,9.9,5.6,11.5 c12,4.1,23.3,6.2,33.8,6.2c12.2,0,23.4-2.7,33.6-8.2c20.3-10.9,30.8-30,35.6-41.4l42.9,14.7c15.3,5.3,28.1,4.5,38-2.4 c15.9-11,16.7-33.3,16.8-34.3c0.1-4-2.4-7.5-6.1-8.8l-122.4-42.2C195.694,99.497,181.794,100.397,169.994,106.097z M66.194,256.497l-45.6-15.6l46.7-136.3l45.6,15.6L66.194,256.497z"></path>{" "}
																<rect
																	id="XMLID_142_"
																	x="334.311"
																	y="148.377"
																	transform="matrix(-0.4395 -0.8982 0.8982 -0.4395 434.9314 634.4379)"
																	style={{ fill: "#acacac" }}
																	width="162.188"
																	height="66.294"
																></rect>{" "}
																<path d="M410.194,266.797l-21.5,19.8c-19.5,17.9-41.5,33-65.3,44.6l-114.1,55.8c-5,2.5-11.1,0.4-13.6-4.7 c-2.5-5-0.4-11.1,4.7-13.6l1.4-0.7l0,0l62.4-30.5c4.5-2.2,6.4-7.6,4.2-12.1c-2.2-4.5-7.6-6.4-12.1-4.2l-62.4,30.5l0,0l-31.4,15.4 c-5,2.5-11.1,0.4-13.6-4.7c-1.2-2.4-1.4-5.2-0.5-7.7c0.9-2.6,2.7-4.6,5.1-5.8l23.7-11.6l0,0l67.8-33.2c4.5-2.2,6.4-7.6,4.2-12.1 s-7.6-6.4-12.1-4.2l-67.9,33.3l0,0l-2.6,1.3l-32.4,15.9c-2.4,1.2-5.2,1.4-7.7,0.5c-2.6-0.9-4.6-2.7-5.8-5.1 c-2.5-5-0.4-11.1,4.7-13.6l11.2-5.5l0,0l22.9-11.2l6.4-3.1l0,0l52.6-25.8c4.5-2.2,6.4-7.6,4.2-12.1s-7.6-6.4-12.1-4.2l-57,27.9 l-24.9,12.2c-5,2.4-11.1,0.4-13.6-4.7c-1.2-2.4-1.4-5.2-0.5-7.7c0.9-2.6,2.7-4.6,5.1-5.8l43.5-21.3c4.5-2.2,6.4-7.6,4.2-12.1 s-7.6-6.4-12.1-4.2l-43.5,21.3c-6.8,3.3-11.9,9.1-14.3,16.2s-2,14.8,1.3,21.6c2.1,4.2,5.1,7.7,8.7,10.3c-6.3,8.3-7.9,19.7-3,29.7 c3.3,6.8,9.1,11.9,16.2,14.3c3,1,6,1.5,9,1.5c-0.1,4.5,0.8,9,2.9,13.1c4.9,10,15,15.8,25.4,15.8c4.2,0,8.4-0.9,12.4-2.9l6.4-3.1 c0.3,3.4,1.2,6.7,2.7,9.9c4.9,10,15,15.8,25.4,15.8c4.2,0,8.4-0.9,12.4-2.9l114.1-55.8c25.4-12.4,48.8-28.4,69.6-47.5l25.5-23.5 l58.4-28.6c4.5-2.2,6.4-7.6,4.2-12.1l-71.4-145.5c-1.1-2.2-2.9-3.8-5.2-4.6c-2.3-0.8-4.8-0.6-6.9,0.4l-59.6,29.1 c-4.5,2.2-6.4,7.6-4.2,12.1L410.194,266.797z M405.394,106.197l63.3,129.5l-43.3,21.2l-63.3-129.5L405.394,106.197z"></path>{" "}
															</g>{" "}
														</g>{" "}
													</g>
												</svg>
											</div>
											<div className="mt-8 text-center relative z-10 space-y-2">
												<h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 ">
													Connect with Top Talent
												</h2>
												<p className="text-gray-500">
													Find and collaborate with skilled professionals to
													bring your projects to life.
												</p>
											</div>
										</div>
									</BlurFade>
								</div>
								<div className="feature-row col-span-full hover:-translate-y-2 duration-300 lg:col-span-3 overflow-hidden relative p-8 bg-[#fbfbfc] hover:border-t border-gray-200">
									<BlurFade yOffset={10} duration={0.6} delay={0.2}>
										<div className="grid sm:grid-cols-2">
											<div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
												<div className="relative aspect-square rounded-full size-12 flex border dark:bg-black/5 dark:border-black/10 before:absolute before:-inset-2 before:border dark:before:border-black/5 dark:before:bg-black/5 before:rounded-full">
													<svg
														className="size-6 m-auto"
														xmlns="http://www.w3.org/2000/svg"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
													>
														<path
															fill="none"
															stroke="currentColor"
															strokeLinejoin="round"
															d="M5.5 7c2 0 6.5-3 6.5-3s4.5 3 6.5 3v4.5C18.5 18 12 20 12 20s-6.5-2-6.5-8.5z"
														></path>
													</svg>
												</div>
												<div className="space-y-2">
													<h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 ">
														Customizable Bounty Terms
													</h2>
													<p className=" text-gray-500">
														Customize bounties with specific requirements,
														deadlines, and rewards.
													</p>
												</div>
											</div>
											<div className="flex justify-center items-center">
												<img
													src="/noteicon.png"
													alt=""
													className="w-40 opacity-70  "
												/>
											</div>
										</div>
									</BlurFade>
								</div>
								<div className="feature-row col-span-full hover:-translate-y-2 duration-300 lg:col-span-3 overflow-hidden relative p-8 bg-[#fbfbfc] border-t lg:border-l lg:border-t-0 hover:border-t border-gray-200 ">
									<BlurFade yOffset={10} duration={0.6} delay={0.2}>
										<div className="h-full grid sm:grid-cols-2">
											<div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
												<div className="relative aspect-square rounded-full size-12 flex border dark:bg-black/5 dark:border-black/10 before:absolute before:-inset-2 before:border dark:before:border-black/5 dark:before:bg-black/5 before:rounded-full">
													<svg
														className="size-6 m-auto"
														xmlns="http://www.w3.org/2000/svg"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
													>
														<g fill="none">
															<path
																stroke="currentColor"
																d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"
															></path>
															<path
																fill="currentColor"
																fillRule="evenodd"
																d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0"
																clipRule="evenodd"
															></path>
														</g>
													</svg>
												</div>
												<div className="space-y-2">
													<h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 ">
														Keep track of your bounties
													</h2>
													<p className="text-gray-500">
														Effortlessly monitor your bounties and tasks, all in
														one place.
													</p>
												</div>
											</div>
											<div className="mt-6 relative sm:-mr-[--card-padding] sm:-my-8 before:absolute before:w-px before:inset-0 before:mx-auto before:bg-gray-200 dark:before:bg-gray-500">
												<div className="relative space-y-6 py-6 flex flex-col justify-center h-full">
													<div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
														<span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-100 dark:border-black/5 ">
															Glodie
														</span>
														<div className="size-9 ring-4 ring-white dark:ring-[--card-dark-bg]">
															{/* <img className="rounded-full  border border-gray-950/5 dark:border-white/5 size-full" src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg" alt="" /> */}
															<div className="ml-1 rounded-full bg-gray-100 border border-gray-950 dark:border-black/5 size-full flex justify-center items-center">
																<CiBadgeDollar color="#7c3aed" size={36} />
															</div>
														</div>
													</div>
													<div className="flex items-center gap-2 ml-[calc(50%-1rem)] relative">
														<div className="size-9 ring-4 ring-white dark:ring-[--card-dark-bg]">
															<div className="mr-1 rounded-full bg-gray-100 border border-gray-950 dark:border-black/5 size-full flex justify-center items-center">
																<FiMessageCircle color="#7c3aed" size={23} />
															</div>
														</div>
														<span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-100 dark:border-black/5 ">
															M. Irung
														</span>
													</div>
													<div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
														<span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-100 dark:border-black/5 ">
															B. Ng
														</span>
														<div className="size-9 ring-4 ring-white dark:ring-[--card-dark-bg]">
															<div className="ml-1 rounded-full bg-gray-100 border border-gray-950 dark:border-black/5 size-full flex justify-center items-center">
																<BiMessageAltEdit color="#7c3aed" size={23} />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</BlurFade>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
