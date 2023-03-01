import React from "react";
import './stockMarket.css'
import { Apple, PlayArrow } from "@mui/icons-material";

export default function StockMarketTabs(props) {
	return (
		<div className="stockmarket-tabs--content">
			{/* Left content of Tabs */}

			<div className="stockmarket-tabs--left">
				<div className="stockmarket-tabs--logo">
					<Apple />
				</div>
				<div className="stockmarket-tabs--name">
					<h3>{props.name}</h3>
					<p>{props.abbreviation}</p>
				</div>
			</div>

			{/* Right content of Tabs */}

			<div className="stockmarket-tabs--right">
				<div className="stockmarket-tabs--right---upper">
					<p className={`${props.percentClass}`}>
						{props.changePercentages}
					</p>
					<PlayArrow
						className={`percent-arrow ${props.percentClass}`}
					/>
				</div>
				<h2>{props.currentPrices}</h2>
			</div>
		</div>
	);
}