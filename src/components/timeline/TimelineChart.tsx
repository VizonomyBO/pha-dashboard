/* eslint-disable func-names */
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import {
  MAX_POSITION,
  MONTH,
  MONTH_NAME,
  START_DATE
} from '../../constants/timeline';
import {
  DataTimelineType, DatesTimelineType, ModalTimeline
} from '../../@types/timeline.ts';
import { useCategoriesDispatch, useCategoriesState } from '../../store/hooks';
import { CompletelyIntentionalAny } from '../../@types/database';

const paddleWidth = 6;
const dotsLength = 3;
const dotsLengthHalf = dotsLength / 2;
const offsetX1 = paddleWidth / 2 - dotsLengthHalf;
const offsetX2 = paddleWidth / 2 + dotsLengthHalf;
const margin = {
  top: 80, right: 30, bottom: 50, left: 30
};
const width = 750 - margin.left - margin.right;
const height = 200 - margin.top - margin.bottom;
const barWidth = width / 19;
const barWidthExtent = width / 20;
const dateCurrent = new Date();
let start_date = new Date('3 May 2022 00:00 UTC');
export const end_date = new Date('30 December 2023 00:00 UTC');

const getDateByX = (newPosition: CompletelyIntentionalAny) => {
  const r = newPosition / barWidth;
  start_date = new Date('3 May 2022 00:00 UTC');
  const date = new Date((start_date.setMonth(new Date().getMonth() + r)));
  return d3.timeFormat('%b %d')(date);
};
const dataReturn = (dates:DatesTimelineType[]) => {
  const dateReturn: CompletelyIntentionalAny[] = [];
  dates.forEach((d:CompletelyIntentionalAny) => {
    const date = new Date(d[0]);
    dateReturn.push(date.toDateString());
  });
  return dateReturn;
};
export const TimelineChart = ({
  data,
  play,
  setPlay,
  dataSuperStar,
  retailerByMonth,
  setModalView
}: {
  data: DataTimelineType[],
  play: boolean,
  setPlay: React.Dispatch<React.SetStateAction<boolean>>,
  dataSuperStar: DataTimelineType[],
  retailerByMonth: boolean,
  setModalView: React.Dispatch<React.SetStateAction<ModalTimeline>>
}) => {
  const DataByCounRetailer = (i: number) => {
    let count = 0;
    if (!retailerByMonth) {
      for (let index1 = 0; index1 <= i && i < dateCurrent.getMonth() - 3; index1 += 1) {
        const information = data.filter((element) => element.month === MONTH_NAME[index1]);
        count += information[0] ? information[0].count : 0;
      }
    } else {
      const information = data.filter((element) => element.month === MONTH_NAME[i]);
      count += information[0] ? information[0].count : 0;
    }
    return count / 100;
  };
  const DataByCounSuperStar = (i: number) => {
    let count = 0;
    if (!retailerByMonth) {
      for (let index1 = 0; index1 <= i && i < dateCurrent.getMonth() - 3; index1 += 1) {
        const information = dataSuperStar.filter((element) => element.month === MONTH_NAME[index1]);
        if (information[0]) {
          count += information[0].superstar_badge_count ? information[0].superstar_badge_count : 0;
        }
      }
    } else {
      const information = dataSuperStar.filter((element) => element.month === MONTH_NAME[i]);
      if (information[0]) {
        count += information[0].superstar_badge_count ? information[0].superstar_badge_count : 0;
      }
    }
    return count / 100;
  };
  const [xLeft, setXLeft] = useState(0);
  const [xRight, setXRight] = useState(width);
  const wrapperRef = useRef<CompletelyIntentionalAny>();
  const { verifiedDateRange } = useCategoriesState();
  const {
    setVerifiedDateRange,
    setCallFilters
  } = useCategoriesDispatch();

  useEffect(() => {
    setCallFilters(true);
  }, [verifiedDateRange, setCallFilters]);

  useEffect(() => {
    if (!play) return;
    setTimeout(() => {
      const newXLeft = (xLeft + barWidthExtent) % (width + barWidthExtent);
      const newXRight = (newXLeft + barWidthExtent) % (width + barWidthExtent);
      setXLeft(newXLeft);
      setXRight(newXRight);
      const x = Math.round(newXLeft / barWidthExtent);
      const y = Math.round(newXRight / barWidthExtent);
      const x1 = new Date((start_date.setMonth(4 + x)));
      start_date = new Date('3 May 2022 00:00 UTC');
      const y1 = new Date((start_date.setMonth(4 + y)));
      if (retailerByMonth) {
        setVerifiedDateRange([new Date(x1.setDate(0)).toISOString(), new Date(y1.setDate(29)).toISOString()]);
      } else if (x1.getMonth() > y1.getMonth()) {
        setVerifiedDateRange(
          [new Date(x1.setDate(1)).toISOString(), new Date(y1.setDate(30)).toISOString()]
        );
      } else {
        setVerifiedDateRange([START_DATE.toISOString(), new Date(y1.setDate(30)).toISOString()]);
      }
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, xLeft]);
  useEffect(() => {
    const maxElements = 0;
    const dates: DatesTimelineType[] | CompletelyIntentionalAny = [];
    let moveBetweenPaddles = 0;
    start_date = new Date('3 May 2022 00:00 UTC');
    const dateForDates = start_date;
    for (let i = 0; i <= 19; i += 1) {
      dates.push([
        dateForDates.toDateString(),
        DataByCounRetailer(i),
        DataByCounSuperStar(i)
      ]);
      if (dateForDates >= end_date) {
        break;
      }
      dateForDates.setMonth(dateForDates.getMonth() + 1);
    }
    let svg: CompletelyIntentionalAny = d3.select(wrapperRef.current);
    svg.selectAll('*').remove();
    svg = d3.select(wrapperRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
    const x = d3.scaleBand()
      .range([0, width])
      .domain(dataReturn(dates));
    [...dates.map((d: CompletelyIntentionalAny) => x(new Date(d[0]).toDateString())), width].forEach((d) => (
      svg.append('line')
        .attr('x1', d)
        .attr('x2', d)
        .attr('y1', 0)
        .attr('y2', height)
        .attr('stroke-width', '0.1')
        .style('stroke', 'black')
        .style('opacity', 0.4)
    ));
    [0, 33, 66, 100].forEach((p) => {
      svg.append('line')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('y1', height * (p / 100))
        .attr('y2', height * (p / 100))
        .attr('stroke-width', '0.1')
        .style('stroke', 'black')
        .style('opacity', 0.4);
    });

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(
        d3.axisBottom(x)
          .tickSize(0)
          .tickFormat((d) => {
            const date = new Date(d);
            const year = date.getUTCFullYear().toString().replace('20', '');
            return MONTH[date.getMonth()] + d3.format('d')(Number(year));
          })
      )
      .selectAll('text')
      .attr('transform', 'translate(15,5)')
      .style('text-anchor', 'end')
      .style('font-size', '9px')
      .style('font-family', 'FuturaMedium, sans-serif')
      .style('fill', '#B4B6B8');
    svg.select('.domain').remove();
    const y = d3.scaleLinear()
      .domain([0, ((maxElements === 0 ? 1 : maxElements) + Math.floor(maxElements / 4))])
      .range([height, 0]);
    svg.selectAll('mybar')
      .attr('id', 'mybar')
      .data(dates)
      .enter()
      .append('rect')
      .attr('x', (d: CompletelyIntentionalAny) => {
        if (d[0]) {
          const datex = x(new Date(d[0]).toDateString());
          if (datex) {
            return datex + 1;
          }
          return 1;
        }
        return 1;
      })
      .attr('y', (d: CompletelyIntentionalAny) => y((d[1] + d[2])))
      .attr('width', barWidth - 2)
      .attr('height', (d: CompletelyIntentionalAny) => height - y(d[2]))
      .attr('fill', '#f0933a')
      .attr('index', (d: CompletelyIntentionalAny, i:number) => i);
    svg.selectAll('mybar1')
      .data(dates)
      .enter()
      .append('rect')
      .attr('x', (d: CompletelyIntentionalAny) => {
        if (d[0]) {
          const datex = x(new Date(d[0]).toDateString());
          if (datex) {
            return datex + 1;
          }
          return 1;
        }
        return 1;
      })
      .attr('y', (d: CompletelyIntentionalAny) => y(d[1]))
      .attr('width', barWidth - 2)
      .attr('height', (d: CompletelyIntentionalAny) => height - y(d[1]))
      .attr('fill', '#00bde3')
      .attr('index', (d: CompletelyIntentionalAny, i:number) => i);

    svg.selectAll('rect')
      .each((d: CompletelyIntentionalAny) => {
        const xLeftRect = x(new Date(d[0]).toDateString());
        const xRightRect = xLeftRect ? xLeftRect + barWidth / 2 : 0;
        const fill = (xLeft - 2) <= (xLeftRect ?? 0) && xRightRect <= (xRight + 2);
        d3.select('react')
          .style('fill', fill ? '#408B50' : '#00bde3');
      });

    const rect = svg.append('rect')
      .attr('fill', 'red')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height)
      .attr('opacity', 0);
    svg.selectAll('.paddle').remove();

    const betweenPaddlesRect = svg.append('rect')
      .attr('id', 'betweenPaddlesRect')
      .attr('fill', 'blue')
      .attr('x', xLeft)
      .attr('y', 0)
      .attr('width', Math.abs(xRight - xLeft))
      .attr('height', height)
      .attr('opacity', 0);

    const leftPaddle = svg.append('rect')
      .attr('id', 'left')
      .attr('class', 'paddle')
      .attr('width', paddleWidth)
      .attr('height', height)
      .attr('x', xLeft - (paddleWidth / 2))
      .attr('y', 0)
      .attr('fill', 'white')
      .attr('stroke', '#1785fb')
      .attr('rx', 2)
      .attr('ry', 2);

    const leftPopup = svg.append('rect')
      .attr('opacity', 0)
      .attr('x', xLeft - 25)
      .attr('y', -25)
      .attr('width', 50)
      .attr('height', 20)
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('stroke', '#CDCFD0')
      .attr('fill', 'white');
    const leftPopupLabel = svg.append('text')
      .attr('opacity', 0)
      .attr('x', xLeft)
      .attr('y', -10)
      .style('font-size', 12)
      .style('text-anchor', 'middle')
      .text(getDateByX(xLeft));

    [0, 1, 2].forEach((r) => {
      const h = height / 2 - (1 - r) * 5;
      svg.append('line')
        .attr('class', 'dotsleft')
        .attr('x1', xLeft - dotsLengthHalf)
        .attr('x2', xLeft + dotsLengthHalf)
        .attr('y1', h)
        .attr('y2', h)
        .attr('stroke-width', '2')
        .style('stroke', 'gray')
        .style('opacity', 0.4);
    });
    const rightPaddle = svg.append('rect')
      .attr('id', 'right')
      .attr('class', 'paddle')
      .attr('width', paddleWidth)
      .attr('height', height)
      .attr('x', xRight - (paddleWidth / 2))
      .attr('y', 0)
      .attr('fill', 'white')
      .attr('stroke', '#1785fb')
      .attr('rx', 2)
      .attr('ry', 2);
    const rightPopup = svg.append('rect')
      .attr('opacity', 0)
      .attr('x', xRight - 25)
      .attr('y', height + 5)
      .attr('width', 50)
      .attr('height', 20)
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('stroke', '#CDCFD0')
      .attr('fill', 'white');
    const rightPopupLabel = svg.append('text')
      .attr('opacity', 0)
      .attr('x', xRight)
      .attr('y', height + 19)
      .style('font-size', 12)
      .style('text-anchor', 'middle')
      .text(getDateByX(xRight));

    [0, 1, 2].forEach((r) => {
      const h = height / 2 - (1 - r) * 5;
      svg.append('line')
        .attr('class', 'dotsright')
        .attr('x1', xRight - dotsLengthHalf)
        .attr('x2', xRight + dotsLengthHalf)
        .attr('y1', h)
        .attr('y2', h)
        .attr('stroke-width', '2')
        .style('stroke', 'gray')
        .style('opacity', 0.4);
    });
    const dotsleft = svg.selectAll('.dotsleft');
    const dotsright = svg.selectAll('.dotsright');

    const paddles = svg.selectAll('.paddle');
    paddles.on('mouseover', function () {
      paddles.style('cursor', 'ew-resize');
    });
    paddles.on('mouseout', function () {
      paddles.style('cursor', 'default');
    });
    betweenPaddlesRect.on('mouseover', function () {
      betweenPaddlesRect.style('cursor', 'move');
    });
    betweenPaddlesRect.on('mouseout', function () {
      betweenPaddlesRect.style('cursor', 'default');
    });

    rect.on('click', function (event: CompletelyIntentionalAny) {
      const information = data.filter(
        (element) => element.month === MONTH_NAME[Math.trunc((event.layerX - barWidthExtent) / barWidthExtent)]
      );
      const informationSperStar = dataSuperStar.filter(
        (element) => element.month === MONTH_NAME[Math.trunc((event.layerX - barWidthExtent) / barWidthExtent)]
      );
      if (information.length > 0 || informationSperStar.length > 0) {
        setModalView({
          view: true,
          x: event.layerX - barWidthExtent,
          number: (event.layerX - barWidthExtent) / barWidthExtent
        });
        setTimeout(() => {
          setModalView({
            view: false,
            x: event.x + barWidthExtent,
            number: (event.x + barWidthExtent) / barWidthExtent
          });
        }, 2000);
      }
    });
    function middleRectDrag(event: CompletelyIntentionalAny) {
      setPlay(false);
      d3.select('#headertimeline').style('z-index', '-1');
      leftPopup.raise().transition('2000').attr('opacity', 1);
      leftPopupLabel.raise().transition('2000').attr('opacity', 1);
      rightPopup.raise().transition('2000').attr('opacity', 1);
      rightPopupLabel.raise().transition('2000').attr('opacity', 1);
      function modalView(event1: CompletelyIntentionalAny) {
        const information = data.filter(
          (element) => element.month === MONTH_NAME[Math.trunc(event1.x / barWidthExtent)]
        );
        const informationSperStar = dataSuperStar.filter(
          (element) => element.month === MONTH_NAME[Math.trunc(event1.x / barWidthExtent)]
        );
        if (information.length > 0 || informationSperStar.length > 0) {
          setModalView({
            view: true,
            x: event1.x,
            number: event1.x / barWidthExtent
          });
          setTimeout(() => {
            setModalView({
              view: false,
              x: event1.x,
              number: event1.x / barWidthExtent
            });
          }, 2000);
        }
      }
      svg.select('#betweenPaddlesRect').call(
        d3.drag().on('end', (event1) => modalView(event1))
      );
      const rect1 = d3.select('#betweenPaddlesRect').classed('dragging', true);
      const diff = (moveBetweenPaddles - event.x) * -1;
      const w = xRight - xLeft;
      function dragged() {
        let newPosition = diff;
        if (newPosition < 0) newPosition = 0;
        if (newPosition + w >= width) newPosition = width - w;
        rect1.attr('x', newPosition);
        leftPaddle.attr('x', newPosition);
        dotsleft.attr('x1', newPosition + offsetX1).attr('x2', newPosition + offsetX2);
        dotsright.attr('x1', newPosition + w + offsetX1).attr('x2', newPosition + w + offsetX2);
        rightPaddle.attr('x', newPosition + w);
        leftPopup.attr('x', newPosition - 25);
        leftPopupLabel.text(getDateByX(newPosition)).raise().attr('x', newPosition);
        rightPopup.attr('x', newPosition + w - 25);
        rightPopupLabel.text(getDateByX(newPosition + w)).raise().attr('x', newPosition + w);
      }

      function ended() {
        d3.select('#headertimeline').style('z-index', '0');
        const newPosition = diff;
        leftPaddle.transition('200').attr('x', newPosition);
        dotsleft.transition('200').attr('x1', newPosition + offsetX1).attr('x2', newPosition + offsetX2);
        rect.transition('200').attr('x', newPosition);
        rightPaddle.transition('200').attr('x', newPosition + w);
        dotsright.transition('200').attr('x1', newPosition + w + offsetX1).attr('x2', newPosition + w + offsetX2);
        rect.classed('dragging', false);
        let r = ((newPosition + xLeft) < 0 ? 0 : newPosition + xLeft) / barWidthExtent;
        start_date = new Date('1 May 2022 00:00 UTC');
        const dateLeft = new Date((start_date.setMonth(start_date.getMonth() + r + 1)));
        r = ((newPosition + xRight) > MAX_POSITION ? MAX_POSITION : newPosition + xRight) / barWidthExtent;
        start_date = new Date('1 May 2022 00:00 UTC');
        const dateRight = new Date(start_date.setMonth(start_date.getMonth() + r));
        if (retailerByMonth) {
          setVerifiedDateRange(
            [new Date(dateLeft.setDate(0)).toISOString(), new Date(dateRight.setDate(29)).toISOString()]
          );
        } else if (dateLeft.getMonth() > dateCurrent.getMonth()) {
          setVerifiedDateRange(
            [new Date(dateLeft.setDate(1)).toISOString(), new Date(dateRight.setDate(30)).toISOString()]
          );
        } else {
          setVerifiedDateRange([START_DATE.toISOString(), new Date(dateRight.setDate(30)).toISOString()]);
        }
        setXLeft((newPosition + xLeft) < 0 ? 0 : newPosition + xLeft);
        setXRight((newPosition + xRight) > MAX_POSITION ? MAX_POSITION : (newPosition + xRight));
        leftPopup.transition('2000').attr('opacity', 0);
        leftPopupLabel.transition('2000').attr('opacity', 0);
        rightPopup.transition('2000').attr('opacity', 0);
        rightPopupLabel.transition('2000').attr('opacity', 0);
      }
      dragged();
      ended();
    }

    function paddlesDrag(event: CompletelyIntentionalAny, paddleId: string) {
      setPlay(false);
      const paddle = d3.select(event.sourceEvent.target).classed('dragging', true);
      const isLeftPaddle = d3.select('.paddle').attr('id') === 'left';
      function dragged() {
        let newPosition = event.x;
        newPosition = Math.floor(newPosition / barWidthExtent) * barWidthExtent;
        if (newPosition < 0) newPosition = 0;
        if (newPosition > width) newPosition = width;
        leftPaddle.attr('x', newPosition);
        paddle.attr('x', newPosition);
        setXLeft(newPosition);
        const dots = isLeftPaddle ? dotsleft : dotsright;
        dots.attr('x1', newPosition + offsetX1).attr('x2', newPosition + offsetX2);
        let r = newPosition / barWidthExtent;
        start_date = new Date('3 May 2022 00:00 UTC');
        const dateLeft = new Date((start_date.setMonth(new Date().getMonth() + r - 1)));
        r = xRight / barWidthExtent;
        const dateRight = new Date((start_date.setMonth(new Date().getMonth() + r - 2)));
        if (retailerByMonth) {
          setVerifiedDateRange(
            [new Date(dateLeft.setDate(0)).toISOString(), new Date(dateRight.setDate(29)).toISOString()]
          );
        } else if (dateLeft.getMonth() > dateCurrent.getMonth()) {
          setVerifiedDateRange(
            [new Date(dateLeft.setDate(1)).toISOString(), new Date(dateRight.setDate(30)).toISOString()]
          );
        } else {
          setVerifiedDateRange([START_DATE.toISOString(), new Date(dateRight.setDate(30)).toISOString()]);
        }
      }

      function ended() {
        start_date = new Date('1 May 2022 00:00 UTC');
        let positions;
        let endedX = event.x;
        if (endedX < 0) endedX = 0;
        if (endedX > width) endedX = width;
        let finalX = Math.ceil(endedX / barWidthExtent) * barWidthExtent;
        if (paddleId === 'left') {
          if (finalX === xRight) {
            if (endedX < xRight) {
              finalX -= barWidth;
            } else if (endedX > xRight) {
              finalX += barWidth;
            } else {
              finalX += barWidth;
            }
          }
          positions = [finalX, xRight];
        } else {
          if (finalX === xLeft) {
            if (endedX < xLeft) {
              finalX -= barWidth;
            } else if (endedX > xLeft) {
              finalX += barWidth;
            } else {
              finalX += barWidth;
            }
          }
          positions = [finalX, xLeft];
        }
        const mini = Math.min(positions[0], positions[1]);
        const maxi = Math.max(positions[0], positions[1]);
        setXLeft(mini);
        setXRight(maxi);
        paddle.classed('dragging', false);
        leftPaddle.transition(200).attr('x', mini);
        dotsleft.transition(200).attr('x1', mini + offsetX1).attr('x2', mini + offsetX2);
        rightPaddle.transition(200).attr('x', maxi);
        dotsright.transition(200).attr('x1', maxi + offsetX1).attr('x2', maxi + offsetX2);
        let r = xLeft / barWidthExtent;
        start_date = new Date('1 May 2022 00:00 UTC');
        const dateLeft = new Date((start_date.setMonth(new Date().getMonth() + r - 1)));
        r = endedX / barWidthExtent;
        start_date = new Date('1 May 2022 00:00 UTC');
        const dateRight = new Date((start_date.setMonth(new Date().getMonth() + r - 1)));
        if (retailerByMonth) {
          setVerifiedDateRange(
            [new Date(dateLeft.setDate(1)).toISOString(), new Date(dateRight.setDate(30)).toISOString()]
          );
        } else if (dateLeft.getMonth() > dateCurrent.getMonth()) {
          setVerifiedDateRange(
            [new Date(dateLeft.setDate(1)).toISOString(), new Date(dateRight.setDate(30)).toISOString()]
          );
        } else {
          setVerifiedDateRange([START_DATE.toISOString(), new Date(dateRight.setDate(30)).toISOString()]);
        }
      }
      if (paddleId === 'left') {
        dragged();
      } else {
        ended();
      }
    }
    svg.select('#left').call(
      d3.drag().on('end', (event) => paddlesDrag(event, 'left'))
    );
    svg.select('#right').call(
      d3.drag().on('end', (event) => paddlesDrag(event, 'right'))
    );
    betweenPaddlesRect.call(
      d3.drag().on('start', (event) => {
        moveBetweenPaddles = event.x;
      }).on('end', middleRectDrag)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, xLeft, xRight, dataSuperStar]);
  return (
    <div ref={wrapperRef} />
  );
};
