import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import Hammer from "hammerjs";

function chart({ historicalPrices }) {

  const procesedHistoricalPrices = historicalPrices.map((array) => ({
    time: new Date(array[0]).toISOString().slice(0, 10),
    open: parseFloat(array[1]),
    high: parseFloat(array[2]),
    low: parseFloat(array[3]),
    close: parseFloat(array[4]),
  }));

  const chartContainerRef = useRef();


  useEffect(() => {
    let chart = createChart(chartContainerRef.current, {
      width: 600,
      height: 300,
      handleScroll: {
        vertTouchDrag: true,
        horzTouchDrag: true,
        mouseWheel: true,
        mouseDrag: true,
        pinch: true,
      },
      layout: {
        background: {
          type: "solid",
          color: "#000000",
        },
        textColor: "rgba(255, 255, 255, 0.9)",
      },
      grid: {
        vertLines: {
          color: "rgba(197, 203, 206, 0.5)",
        },
        horzLines: {
          color: "rgba(197, 203, 206, 0.5)",
        },
      },
      crosshair: {
        mode: 0,
      },
      rightPriceScale: {
        borderColor: "rgba(197, 203, 206, 0.8)",
      },
      timeScale: {
        borderColor: "rgba(197, 203, 206, 0.8)",
        
      },
    });

    let candleSeries = chart.addCandlestickSeries({
      upColor: "green",
      downColor: "red",
      borderDownColor: "red",
      borderUpColor: "green",
      wickDownColor: "red",
      wickUpColor: "green",
    });

    candleSeries.setData(procesedHistoricalPrices);
  }, [historicalPrices]);

  return <div ref={chartContainerRef} />;
}

export default chart;
