import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSwipeable } from "react-swipeable"

const MainWrapper = styled.div`
	height: 70vh;
	max-height: 400px;
	max-width: 800px;
	background: #fff;
	margin: 3rem auto;
	overflow: hidden;
	position: relative;
	display: flex;
	box-shadow: -1px 7px 30px 6px rgba(0, 0, 0, 0.18);
	-webkit-box-shadow: -1px 7px 30px 6px rgba(0, 0, 0, 0.18);
	-moz-box-shadow: -1px 7px 30px 6px rgba(0, 0, 0, 0.18);
	border-radius: 0 1.5rem 1.5rem 1.5rem;
	@media (max-width: 768px) {
		flex-direction: column;
    min-height: 100vh;
	}
	.images-wrapper {
		position: relative;
		top: -26%;
		left: -12%;
		width: 50%;
		@media (max-width: 768px) {
			width: 100%;
      top: -15%;
      left: -20%;
		}
		/* display: flex;
    align-items: center;
    justify-content: center; */
		img {
			height: 200px;
			width: 200px;
			position: absolute;
			/* top: 30%; */
      /* border-radius: 50%; */
     
    }
		svg {
			/* height: 50%; */
			/* width: 37%; */
			/* width: 90%; */
			height: clamp(300px, 100%, 400px);
			width: clamp(350px, 100%, 400px);
			/* width: 400px; */
			transition: all 0.6s;
			/* transform: rotate(10deg); */
			/* transform: rotate(64deg); */
			transform: rotate(${(props) => props.degree}deg);
			/* fill: red; */
			fill: ${(props) => props.currentColor};
		}
		h1 {
			position: absolute;
			top: 50%;
			/* right: 30%; */
			right: 10%;
			color: white;
			font-size: 2.5rem;
			font-weight: bold;
			@media (max-width: 768px) {
				right: 20%;
			}
		}
	}
	.right-box {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		@media (max-width: 768px) {
			width: 100%;
      transform: translateY(-100px);
		}
		h2 {
			font-size: 2rem;
			font-weight: lighter;
		}
		.table {
			.head {
				display: flex;
				margin: 1rem 0 1.5rem 0;
				padding-left: 1rem;
				p {
					font-weight: 600;
					font-size: 16px;
				}
				.left {
					width: 80%;
				}
				.right {
					width: 20%;
				}
			}
			.gray {
				background: rgb(0, 0, 0, 0.025);
				-webkit-box-shadow: -390px 0px 0px 0px rgb(0, 0, 0, 0.025);
				-moz-box-shadow: -390px 0px 0px 0px rgb(0, 0, 0, 0.025);
				box-shadow: -390px 0px 0px 0px rgb(0, 0, 0, 0.025);
			}
			.row {
				display: flex;
				align-items: center;
				margin: 0.3rem;
				padding: 0.5rem 0;
				p {
					font-weight: bold;
					font-size: 18px;
				}
				.left {
					width: 80%;
					display: flex;
					align-items: center;
					gap: 25%;
          overflow: hidden;
					/* justify-content: space-between; */
					/* margin-right: 1rem; */
					img {
						height: 40px;
						width: 40px;
					}
				}
				.right {
					width: 20%;
					font-size: 24px;
				}
			}
		}
	}
	button {
		background: red;
		margin-top: 1rem;
		width: 100px;
		border: none;
		background: #444;
		padding: 8px;
		color: #fff;
		cursor: pointer;
	}
`

export default function Animation() {
	const [degree, setDegree] = useState(10)
	const colors = ["#B01E1E", "#1E73B0", "#9C1EB0"]
	const [currentColor, setCurrentColor] = useState(0)

	const yMovement = []
	for (var i = 250; i >= -250; i--) {
		yMovement.push(-i)
	}
	const xMovement = []
	const xNegMovement = []
	for (var i = 150; i >= 0; i--) {
		xMovement.push(-i)
	}
	for (var i = 0; i <= 150; i++) {
		xNegMovement.push(-i)
	}

	const final = [...xMovement, ...xNegMovement]


	const handleClick = () => {
		setDegree((prev) => prev + 54)
		if (currentColor < colors.length - 1) {
			setCurrentColor((prev) => prev + 1)
		} else {
			setCurrentColor(0)
		}
	}

	const handlers = useSwipeable({
		onSwiped: (eventData) => handleClick()
	  });
	return (
		<MainWrapper {...handlers} degree={degree} currentColor={colors[currentColor]}>
			<div className="images-wrapper">
				<svg
					width="1497"
					height="1642"
					viewBox="0 0 1497 1642"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M681.998 26.0209C748.775 -9.3985 829.171 -7.51753 894.217 30.9861L1390.04 324.48C1456.03 363.542 1496.5 434.533 1496.5 511.217V1128.86C1496.5 1205.5 1456.07 1276.46 1390.13 1315.54L891.319 1611.16C827.853 1648.77 749.625 1651.56 683.639 1618.57L120.455 1336.98C46.9385 1300.22 0.5 1225.08 0.5 1142.89V518.036C0.5 437.718 44.8635 363.969 115.818 326.333L681.998 26.0209Z" />
				</svg>

				<AnimatePresence mode="wait">
					{currentColor === 0 && (
						<motion.h1
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
							exit={{ x: -300 }}
						>
							Camera
						</motion.h1>
					)}
				</AnimatePresence>
				<AnimatePresence mode="wait">
					{currentColor === 1 && (
						<motion.h1
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
							exit={{ x: -300 }}
						>
							 Microphone
						</motion.h1>
					)}
				</AnimatePresence>
				<AnimatePresence mode="wait">
					{currentColor === 2 && (
						<motion.h1
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
							exit={{ x: -300 }}
						>
							Headphone
						</motion.h1>
					)}
				</AnimatePresence>

				<AnimatePresence mode="wait">
					{currentColor === 0 && (
						<motion.img
							initial={{ opacity: 0, x: -50, y: -200 }}
							animate={{
								opacity: 1,
								x: final,
								y: yMovement,
								transition: { duration: 1, type: "linear" },
							}}
              exit={{x: -400, opacity: 0}}
							src="/camera.png"
							alt=""
						/>
					)}
				</AnimatePresence>
				<AnimatePresence mode="wait">
					{currentColor === 1 && (
						<motion.img
							initial={{ opacity: 0, x: -50, y: -200 }}
							animate={{
								opacity: 1,
								x: final,
								y: yMovement,
								transition: { duration: 1, type: "linear" },
							}}
              exit={{x: -400, opacity: 0}}
							src="/mic.png"
							alt=""
						/>
					)}
				</AnimatePresence>
				<AnimatePresence mode="wait">
					{currentColor === 2 && (
						<motion.img
							initial={{ opacity: 0, x: -50, y: -200 }}
							animate={{
								opacity: 1,
								x: final,
								y: yMovement,
								transition: { duration: 1, type: "linear" },
							}}
              exit={{x: -400, opacity: 0}}
							src="/headphone.png"
							alt=""
						/>
					)}
				</AnimatePresence>
			</div>
			<div className="right-box">
				<h2>My Store</h2>
				<div className="table">
					<div className="head">
						<p className="left">Product</p>
						<p className="right">NO</p>
					</div>

								<div className="row gray">
                  
                  <div   className="left">
                    <AnimatePresence mode="wait">
                      {currentColor === 0 &&
                        <><motion.p initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.4, type: 'easeIn'}}}>Camera</motion.p> <motion.img initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.2, type: 'easeIn'}}}  src="/camera.png"  /></>
                      }
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      {currentColor === 1 &&
                        <><motion.p initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.4, type: 'easeIn'}}}>Headphone</motion.p> <motion.img initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.2, type: 'easeIn'}}}  src="/headphone.png"  /></>
                      }
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      {currentColor === 2 &&
                        <><motion.p initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.4, type: 'easeIn'}}}>Microphone</motion.p> <motion.img initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.2, type: 'easeIn'}}}  src="/mic.png"  /></>
                      }
                    </AnimatePresence>
                  </div>
									<div className="right">+</div>
								</div>
								<div className="row ">
                  
                  <div   className="left">
                    <AnimatePresence mode="wait">
                      {currentColor === 0 &&
                        <><motion.p initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.4, type: 'easeIn'}}}>Camera</motion.p> <motion.img initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.2, type: 'easeIn'}}}  src="/camera.png"  /></>
                      }
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      {currentColor === 1 &&
                        <><motion.p initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.4, type: 'easeIn'}}}>Microphone</motion.p> <motion.img initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.2, type: 'easeIn'}}}  src="/mic.png"  /></>
                      }
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      {currentColor === 2 &&
                        <><motion.p initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.4, type: 'easeIn'}}}>Headphone</motion.p> <motion.img initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.2, type: 'easeIn'}}}  src="/headphone.png"  /></>
                      }
                    </AnimatePresence>
                  </div>
									<div className="right">+</div>
								</div>
								<div className="row gray">
                  
                  <div   className="left">
                    <AnimatePresence mode="wait">
                      {currentColor === 0 &&
                        <><motion.p initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.4, type: 'easeIn'}}}>Microphone</motion.p> <motion.img initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.2, type: 'easeIn'}}}  src="/mic.png"  /></>
                      }
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      {currentColor === 1 &&
                        <><motion.p initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.4, type: 'easeIn'}}}>Camera</motion.p> <motion.img initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.2, type: 'easeIn'}}}  src="/camera.png"  /></>
                      }
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      {currentColor === 2 &&
                        <><motion.p initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.4, type: 'easeIn'}}}>Headphone</motion.p> <motion.img initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.2, type: 'easeIn'}}}  src="/headphone.png"  /></>
                      }
                    </AnimatePresence>
                  </div>
									<div className="right">+</div>
								</div>
								
					
				</div>
				<button onClick={() => handleClick()}>Next</button>
			</div>
			{/* <div>
        <h1>Whatever</h1>   
      </div> */}
		</MainWrapper>
	)
}
