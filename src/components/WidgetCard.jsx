import { useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import barIcon from "../assets/bar-icon.svg";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { removeWidget } from "../features/widgetSlice";

const WidgetCard = ({ widget, categoryName }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch(removeWidget({ category: categoryName, widgetId: widget.id }));
  };

  const renderWidgetContent = () => {
    switch (widget.type) {
      case "donut":
        return (
          <div className="flex flex-col items-center sm:flex-row md:flex-col xl:flex-row">
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <div style={{ width: 200, height: 200 }}>
                  <PieChart width={200} height={200}>
                    <Pie
                      data={widget.data.breakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      startAngle={widget.name === "Cloud Accounts" ? 270 : 180}
                      endAngle={widget.name === "Cloud Accounts" ? -120 : -180}
                      dataKey="value"
                      minAngle={4}
                    >
                      {widget.data.breakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {widget.data.total}
                  </div>
                  <div className="text-sm text-gray-500">Total</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-3 lg:mt-4 xl:mt-0 2xl:ml-9">
              {widget.data.breakdown.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="mr-3 h-3 w-3 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="mr-4 text-sm text-gray-700">
                    {item.name}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    ({item.value})
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case "bar": {
        const stackedData = [
          widget.data.breakdown.reduce(
            (acc, item) => {
              acc[item.name] = item.value;
              return acc;
            },
            { row: "bar" },
          ),
        ];

        return (
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold">{widget.data.total}</div>
              <div className="text-sm text-gray-600">{widget.tag}</div>
            </div>

            <div className="mb-3">
              <ResponsiveContainer width="100%" height={24}>
                <BarChart
                  data={stackedData}
                  layout="vertical"
                  margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                >
                  <XAxis type="number" hide domain={[0, widget.data.total]} />
                  <YAxis type="category" dataKey="row" hide />
                  {widget.data.breakdown.map((entry, index) => {
                    const isFirst = index === 0;
                    const isLast = index === widget.data.breakdown.length - 1;

                    return (
                      <Bar
                        key={index}
                        dataKey={entry.name}
                        stackId="a"
                        fill={entry.color}
                        barSize={24}
                        isAnimationActive={false}
                        radius={
                          isFirst
                            ? [12, 0, 0, 12]
                            : isLast
                              ? [0, 12, 12, 0]
                              : [0, 0, 0, 0]
                        }
                      />
                    );
                  })}
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-3 space-y-1">
              {widget.data.breakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center">
                    <div
                      className="mr-2 h-3 w-3 rounded-sm"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">({item.value})</span>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case "empty":
        return (
          <div className="flex h-48 flex-col items-center justify-center text-gray-500">
            <img src={barIcon} className="mb-4 h-16 w-16 text-gray-300" />
            <p className="text-center font-medium">{widget.data.message}</p>
          </div>
        );

      case "text":
        return (
          <div className="flex h-48 flex-col items-center justify-center">
            <img
              src={barIcon}
              alt="bar"
              className="mb-4 h-16 w-16 text-gray-300"
            />
            <p className="text-center text-gray-700">
              No Graph data available!
            </p>
            <div className="text-center text-gray-700">{widget.data.text}</div>
          </div>
        );

      default:
        return (
          <div className="flex h-48 flex-col items-center justify-center text-gray-500">
            <p>Widget type not supported</p>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-[300px] rounded-2xl border border-gray-200 bg-white p-4">
      <button
        onClick={handleRemoveWidget}
        className="absolute top-2 right-2 rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
      >
        <FiX className="h-4 w-4" />
      </button>

      <h3 className="mb-4 pr-8 font-semibold text-gray-900">{widget.name}</h3>

      <div className="mt-5 flex-1">{renderWidgetContent()}</div>
    </div>
  );
};

export default WidgetCard;
