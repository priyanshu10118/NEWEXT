import React from "react";
import './stockMarket.css'
import StockMarketTabs from "./StockMarketTabs";
import { ArrowForwardIos } from "@mui/icons-material";

export default function StockMarketToday() {
	return (
		<div className="stockmarket">
			<div className="stockmarket-header">
				<div className="stockmarket-headline">
					<h2>Stock Market Today</h2>
					<p>
						<ArrowForwardIos className="stockmarket-heading--arrow"/>
					</p>
				</div>
			</div>
			<div className="tabs-container">
				<StockMarketTabs
					logo=""
					name="Apple"
					abbreviation="APL"
					changePercentages="+2.63"
					percentClass="stocks-increased-percentage"
					currentPrices="$176.23"
				/>
				<StockMarketTabs
					logo=""
					name="Nvidia"
					abbreviation="NVDA"
					changePercentages="+3.25"
					percentClass="stocks-increased-percentage"
					currentPrices="$294.31"
				/>
				<StockMarketTabs
					logo=""
					name="Zoom Video"
					abbreviation="ZM"
					changePercentages="-6.29"
					percentClass="stocks-decrease-percentage"
					currentPrices="$193.43"
				/>
				<StockMarketTabs
					logo=""
					name="Microsoft"
					abbreviation="MSFT"
					changePercentages="-0.19"
					percentClass="stocks-decrease-percentage"
					currentPrices="$336.10"
				/>
				<StockMarketTabs
					logo=""
					name="Amazon"
					abbreviation="AMZN"
					changePercentages="+1.49"
					percentClass="stocks-increased-percentage"
					currentPrices="$357.56"
				/>
			</div>
		</div>
	);
}