import { motion, HTMLMotionProps } from "framer-motion";

interface PreloadMotionVideoProps extends HTMLMotionProps<"video"> {
  isInView?: boolean;
  sources: { url: string; type: string }[];
}

interface PreloadVideoProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  isInView?: boolean;
  sources: { url: string; type: string }[];
}

export const PreloadMotionVideo = ({
  isInView,
  sources,
  ...props
}: PreloadMotionVideoProps) => {
  return (
    <>
      <video preload="auto" className="hidden preload-video">
        {sources.map((item) => (
          <source key={item.url} src={item.url} type={item.type} />
        ))}
      </video>
      {isInView && (
        <motion.video autoPlay={true} playsInline loop muted {...props}>
          {sources.map((item) => (
            <source key={item.url} src={item.url} type={item.type} />
          ))}
        </motion.video>
      )}
    </>
  );
};

export const PreloadVideo = ({
  isInView,
  sources,
  ...props
}: PreloadVideoProps) => {
  return (
    <>
      <video preload="auto" className="hidden preload-video">
        {sources.map((item) => (
          <source key={item.url} src={item.url} type={item.type} />
        ))}
      </video>
      {isInView && (
        <video autoPlay={true} playsInline loop muted {...props}>
          {sources.map((item) => (
            <source key={item.url} src={item.url} type={item.type} />
          ))}
        </video>
      )}
    </>
  );
};
