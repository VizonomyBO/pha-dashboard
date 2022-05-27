import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import {
  END_DATE,
  MONTH,
  MONTH_NAME
} from '../../constants/timeline';
import { DataTimelineType, DatesTimelineType, TimelinesFrameType } from '../../@types/timeline.ts';
import { useCategoriesDispatch, useCategoriesState } from '../../store/hooks';

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
const barWidth = width / 20;

const getDateByX = (newPosition:any, minusOne = false) => {
  const r = newPosition / barWidth;
  const date = new Date((new Date().setDate(new Date().getDate() - 30 + r - (minusOne ? 1 : 0))));
  return d3.timeFormat('%b %d')(date);
};
const dataReturn = (dates:DatesTimelineType[]) => {
  const dateReturn: any[] = [];
  dates.forEach((d:any) => {
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
  retailerByMonth
}: {
  data: DataTimelineType[],
  play: boolean,
  setPlay: React.Dispatch<React.SetStateAction<boolean>>,
  dataSuperStar: DataTimelineType[],
  retailerByMonth: boolean
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const DataByCounRetailer = (i: number) => {
    let countAcum = 0;
    let count = 0;
    let never = true;
    data.map((element) => {
      if (!retailerByMonth) {
        countAcum += element.count;
        if (element.month === MONTH_NAME[i]) {
          count = countAcum;
          never = false;
        }
      } else if (element.month === MONTH_NAME[i]) {
        count = element.count;
      }
      if (!retailerByMonth && never) {
        count = countAcum;
      }
      return count;
    });
    return count / 50;
  };
  const DataByCounSuperStar = (i: number) => {
    let countAcum = 0;
    let count = 0;
    let never = true;
    dataSuperStar.map((element) => {
      if (!retailerByMonth) {
        countAcum += element.count;
        if (element.month === MONTH_NAME[i]) {
          count = countAcum;
          never = false;
        }
      } else if (element.month === MONTH_NAME[i]) {
        count = element.count;
      }
      if (!retailerByMonth && never) {
        count = countAcum;
      }
      return count;
    });
    return count / 100;
  };
  const [xLeft, setXLeft] = useState(0);
  const [xRight, setXRight] = useState(width);
  const wrapperRef = useRef<any>();
  const [, setTimelineTimeframe] = useState<TimelinesFrameType | unknown>();
  // const { startDate, endDate, filter, selected, play } = useTimelineState();
  // eslint-disable-next-line max-len
  // const { setTimelineDataStories, setTimelineTimeframe, setTimelineSelected, setTimelinePlay } = useTimelineDispatch();
  const [endPlay, setEndPlay] = useState(new Date('22 May 2022 00:00 UTC'));
  const { verifiedDateRange } = useCategoriesState();
  const {
    setVerifiedDateRange,
    setCallFilters
  } = useCategoriesDispatch();

  useEffect(() => {
    setCallFilters(true);
  }, [verifiedDateRange, setCallFilters]);

  useEffect(() => {
    if (play) {
      setTimeout(() => {
        const newXLeft = (xLeft + barWidth) % width;
        const newXRight = (newXLeft + barWidth) % width;
        setXLeft(newXLeft);
        setXRight(newXRight);
        const x = Math.round(newXLeft / barWidth);
        const y = (Math.round(newXRight / barWidth)) - 1;
        const x1 = new Date((new Date('22 May 2022 00:00 UTC').setMonth(5 + x)));
        const y1 = new Date((new Date('22 May 2022 00:00 UTC').setMonth(5 + y)));
        setVerifiedDateRange([x1.toISOString(), y1.toISOString()]);
        if (y1.toDateString() >= new Date('23 December 2023 00:00 UTC').toDateString()) {
          setPlay(false);
        }
      }, 3000);
    } else {
      setEndPlay(new Date('22 May 2022 00:00 UTC'));
    }
  }, [endPlay, play, setPlay, xLeft, setVerifiedDateRange]);
  useEffect(() => {
    const maxElements = 0;
    // const dataStories = [];
    // eslint-disable-next-line max-len
    const dates: DatesTimelineType[] | any = [];
    // const dataByDate = d3.group(data, (d) => {
    //   const datesDivition = d.month.split('-');
    //   return new Date(`${datesDivition[0]}-22-${datesDivition[1]}`).toDateString();
    // });
    const dateForDates = new Date('22 May 2022 00:00 UTC');
    // const dataByCoun =
    for (let i = 0; i <= 19; i += 1) {
      // const date = new Date((new Date().setDate(new Date().getDate() - 130 + i))).toDateString();
      dates.push([
        dateForDates.toDateString(),
        DataByCounRetailer(i),
        DataByCounSuperStar(i)
      ]);
      if (dateForDates >= END_DATE) {
        break;
      }
      dateForDates.setMonth(dateForDates.getMonth() + 1);
    }
    // eslint-disable-next-line max-len
    // const startDateIndex = dates.findIndex((a:any) => new Date(START_DATE).toDateString() === new Date(a[0]).toDateString());
    // const endDateIndex = dates.findIndex((a:any) => new Date(END_DATE).toDateString()
    // === new Date(a[0]).toDateString());
    // dates.forEach((d: any, i: number) => {
    //   maxElements = Math.max(d[1].length, maxElements);
    //   if (i >= startDateIndex && i <= endDateIndex) {
    //     dataStories.push(...d[1]);
    //   }
    // });
    // eslint-disable-next-line @typescript-eslint/no-shadow
    let svg:any = d3.select(wrapperRef.current);
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
    [...dates.map((d:any) => x(new Date(d[0]).toDateString())), width].forEach((d) => (
      svg.append('line')
        .attr('x1', d)
        .attr('x2', d)
        .attr('y1', 0)
        .attr('y2', height)
        .attr('stroke-width', '0.1')
        .style('stroke', 'black')
        .style('opacity', 0.4)
    ));
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].forEach((p) => {
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
            return MONTH[date.getMonth()] + d3.format('d')(date.getUTCFullYear());
          })
      )
      .selectAll('text')
      .attr('transform', 'translate(3,4)')
      .style('text-anchor', 'end')
      .style('font-size', '6px')
      .style('fill', '#B4B6B8');
    svg.select('.domain').remove();
    const y = d3.scaleLinear()
      .domain([0, ((maxElements === 0 ? 1 : maxElements) + Math.floor(maxElements / 4))])
      .range([height, 0]);
    svg.selectAll('mybar')
      .data(dates)
      .enter()
      .append('rect')
      .attr('x', (d:any) => {
        if (d[0]) {
          const datex = x(new Date(d[0]).toDateString());
          if (datex) {
            return datex + 2;
          }
          return 2;
        }
        return 2;
      })
      .attr('y', (d:any) => y((d[1] + d[2])))
      .attr('width', barWidth - 2)
      .attr('height', (d:any) => height - y(d[2]))
      .attr('fill', '#f0933a')
      .attr('index', (d:any, i:number) => i);
    svg.selectAll('mybar1')
      .data(dates)
      .enter()
      .append('rect')
      .attr('x', (d:any) => {
        if (d[0]) {
          const datex = x(new Date(d[0]).toDateString());
          if (datex) {
            return datex + 1;
          }
          return 1;
        }
        return 1;
      })
      .attr('y', (d:any) => y(d[1]))
      .attr('width', barWidth - 2)
      .attr('height', (d:any) => height - y(d[1]))
      .attr('fill', '#00bde3')
      .attr('index', (d:any, i:number) => i);

    svg.selectAll('rect')
      .each((d:any) => {
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
      .text(getDateByX(xRight, true));

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
    paddles.on('mouseover', () => {
      d3.select('mouseover').style('cursor', 'ew-resize');
    });
    paddles.on('mouseout', () => {
      d3.select('mouseout').style('cursor', 'default');
    });
    betweenPaddlesRect.on('mouseover', () => {
      d3.select('mouseover').style('cursor', 'move');
    });
    betweenPaddlesRect.on('mouseout', () => {
      d3.select('mouseout').style('cursor', 'default');
    });

    rect.on('click', (event:any) => {
      const [xCoord] = d3.pointer(event, this);
      setXLeft((xCoord / barWidth) * barWidth);
      setXRight(((xCoord / barWidth) + 1) * barWidth);
      setTimelineTimeframe({
        startDate: new Date(dates[Math.ceil((xCoord / barWidth))][0]),
        endDate: new Date(dates[Math.floor(((xCoord / barWidth) + 1))][0])
      });
    });

    const middleRectDrag = (event:any) => {
      d3.select('#headertimeline').style('z-index', '-1');
      leftPopup.raise().transition('2000').attr('opacity', 1);
      leftPopupLabel.raise().transition('2000').attr('opacity', 1);
      rightPopup.raise().transition('2000').attr('opacity', 1);
      rightPopupLabel.raise().transition('2000').attr('opacity', 1);
      const rect1 = d3.select(event).classed('dragging', true);

      const diff = event.x - parseInt(rect1.attr('x'), 10);
      const w = xRight - xLeft;

      const dragged = () => {
        let newPosition = event.x - diff;
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
        rightPopupLabel.text(getDateByX(newPosition + w, true)).raise().attr('x', newPosition + w);
      };

      const ended = () => {
        d3.select('#headertimeline').style('z-index', '0');
        let newPosition = event.x - diff;
        if (newPosition < 0) newPosition = 0;
        if (newPosition + w >= width) newPosition = width - w;
        newPosition = (newPosition / barWidth) * barWidth;
        leftPaddle.transition('200').attr('x', newPosition);
        dotsleft.transition('200').attr('x1', newPosition + offsetX1).attr('x2', newPosition + offsetX2);
        rect.transition('200').attr('x', newPosition);
        rightPaddle.transition('200').attr('x', newPosition + w);
        dotsright.transition('200').attr('x1', newPosition + w + offsetX1).attr('x2', newPosition + w + offsetX2);
        rect.classed('dragging', false);
        setXLeft(newPosition);
        setXRight(newPosition + w);
        setTimelineTimeframe({
          startDate: new Date(dates[Math.ceil(newPosition / barWidth)][0]),
          endDate: new Date(dates[Math.floor((newPosition + w - barWidth) / barWidth)][0])
        });
        // setTimelineSelected('timeframe');
        leftPopup.transition('2000').attr('opacity', 0);
        leftPopupLabel.transition('2000').attr('opacity', 0);
        rightPopup.transition('2000').attr('opacity', 0);
        rightPopupLabel.transition('2000').attr('opacity', 0);
      };
      event.on('drag', dragged).on('end', ended);
    };

    const paddlesDrag = (event:any) => {
      const paddle = d3.select(event).classed('dragging', true);
      const isLeftPaddle = d3.select(event).attr('id') === 'left';

      const dragged = () => {
        let newPosition = event.x;
        if (newPosition < 0) newPosition = 0;
        if (newPosition > width) newPosition = width;
        paddle.attr('x', newPosition);
        const dots = isLeftPaddle ? dotsleft : dotsright;
        dots.attr('x1', newPosition + offsetX1).attr('x2', newPosition + offsetX2);
      };

      const ended = () => {
        let positions;
        let endedX = event.x;
        if (endedX < 0) endedX = 0;
        if (endedX > width) endedX = width;
        let finalX = (endedX / barWidth) * barWidth;
        if (isLeftPaddle) {
          if (finalX === xRight) {
            if (endedX < xRight) {
              finalX -= barWidth;
            } else if (endedX > xRight) {
              finalX += barWidth;
            } else {
              // TODO: review
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
              // TODO: review
              finalX += barWidth;
            }
          }
          positions = [finalX, xLeft];
        }
        const mini = Math.min(positions[0], positions[1]);
        const maxi = Math.max(positions[0], positions[1]);
        setTimelineTimeframe({
          startDate: new Date(dates[Math.ceil(mini / barWidth)][0]),
          endDate: new Date(dates[Math.floor((maxi - barWidth) / barWidth)][0])
        });
        // setTimelineSelected('timeframe');
        setXLeft(mini);
        setXRight(maxi);
        paddle.classed('dragging', false);
        leftPaddle.transition('200').attr('x', mini);
        dotsleft.transition('200').attr('x1', mini + offsetX1).attr('x2', mini + offsetX2);
        rightPaddle.transition('200').attr('x', maxi);
        dotsright.transition('200').attr('x1', maxi + offsetX1).attr('x2', maxi + offsetX2);
      };
      event.on('drag', dragged).on('end', ended);
    };
    svg.selectAll('.paddle').call(
      d3.drag().on('start', (e:any) => {
        paddlesDrag(e);
      })
    );
    betweenPaddlesRect.call(
      d3.drag().on('start', (e:any) => {
        middleRectDrag(e);
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, xLeft, xRight]);
  return (
    <div ref={wrapperRef} />
  );
};
