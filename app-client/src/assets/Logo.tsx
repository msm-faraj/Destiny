import { Box } from "@chakra-ui/react";

interface Props {
  size: number;
  color: string;
}

export const Logo = ({ size, color }: Props) => {
  return (
    <Box m={0} style={{ transform: "rotate(180deg)" }}>
      <svg viewBox="40 40 420 420" height={size} fill={color}>
        <g>
          <path d="m 445.911,366.686 c -0.273,-1.782 -0.55,-3.577 -0.825,-5.383 -0.222,-1.817 -0.738,-3.592 -1.104,-5.406 l -0.619,-2.713 c -0.242,-0.898 -0.533,-1.786 -0.8,-2.681 -0.577,-1.779 -1.02,-3.609 -1.713,-5.363 -0.679,-1.759 -1.362,-3.523 -2.044,-5.29 -0.741,-1.744 -1.614,-3.436 -2.415,-5.16 -0.77,-1.745 -1.748,-3.381 -2.708,-5.027 -1.824,-3.357 -4.137,-6.397 -6.319,-9.503 -1.182,-1.481 -2.43,-2.909 -3.639,-4.358 -0.62,-0.713 -1.197,-1.46 -1.845,-2.139 l -1.989,-1.992 c -1.342,-1.306 -2.612,-2.681 -3.997,-3.911 -1.429,-1.181 -2.849,-2.357 -4.261,-3.526 -0.718,-0.568 -1.385,-1.198 -2.139,-1.709 -0.745,-0.519 -1.488,-1.036 -2.228,-1.551 -1.485,-1.028 -2.954,-2.048 -4.414,-3.06 -1.533,-0.891 -3.05,-1.775 -4.555,-2.65 -1.524,-0.839 -2.957,-1.813 -4.526,-2.484 -1.541,-0.72 -3.064,-1.432 -4.571,-2.136 -1.512,-0.686 -2.968,-1.45 -4.499,-1.971 -3.032,-1.112 -5.935,-2.32 -8.817,-3.254 -2.91,-0.841 -5.719,-1.654 -8.418,-2.434 -2.707,-0.729 -5.354,-1.216 -7.843,-1.77 -1.247,-0.26 -2.464,-0.515 -3.645,-0.762 -1.179,-0.248 -2.351,-0.361 -3.472,-0.541 -2.246,-0.32 -4.349,-0.619 -6.291,-0.896 -0.972,-0.132 -1.903,-0.258 -2.792,-0.379 -0.898,-0.07 -1.752,-0.136 -2.565,-0.199 -3.241,-0.231 -5.788,-0.412 -7.523,-0.536 -1.733,-0.118 -2.657,-0.181 -2.657,-0.181 0,0 0.913,0.162 2.628,0.466 1.709,0.297 4.216,0.734 7.408,1.289 0.798,0.134 1.637,0.275 2.516,0.423 0.872,0.199 1.785,0.406 2.736,0.622 1.897,0.423 3.952,0.88 6.146,1.368 1.093,0.258 2.237,0.453 3.381,0.785 1.148,0.329 2.324,0.668 3.535,1.016 2.408,0.724 4.985,1.323 7.593,2.199 2.593,0.915 5.293,1.868 8.088,2.854 2.757,1.068 5.54,2.333 8.432,3.54 1.466,0.564 2.842,1.365 4.275,2.09 1.425,0.738 2.865,1.486 4.323,2.242 0.74,0.356 1.447,0.778 2.143,1.231 0.704,0.432 1.414,0.867 2.127,1.303 1.421,0.875 2.856,1.757 4.304,2.647 5.517,3.948 11.101,8.221 15.931,13.425 l 1.87,1.896 c 0.611,0.647 1.147,1.361 1.726,2.039 1.128,1.38 2.297,2.735 3.403,4.141 2.028,2.952 4.19,5.833 5.887,9.011 0.921,1.545 1.86,3.078 2.595,4.723 0.771,1.623 1.612,3.212 2.326,4.856 0.66,1.669 1.318,3.333 1.974,4.993 0.674,1.655 1.106,3.393 1.668,5.076 1.993,6.805 3.534,13.683 4.101,20.47 0.24,1.685 0.27,3.376 0.379,5.044 0.088,1.67 0.224,3.324 0.201,4.966 0.01,1.641 0.018,3.266 0.028,4.87 -0.072,1.606 -0.144,3.191 -0.215,4.755 -0.45,6.242 -1.112,12.162 -2.249,17.532 -0.128,0.674 -0.255,1.342 -0.381,2.002 -0.16,0.653 -0.315,1.298 -0.468,1.936 -0.309,1.279 -0.609,2.528 -0.901,3.745 -0.345,1.204 -0.682,2.377 -1.01,3.517 -0.314,1.148 -0.655,2.249 -1.038,3.299 -0.366,1.057 -0.717,2.081 -1.058,3.069 -0.357,0.983 -0.76,1.906 -1.108,2.811 -0.368,0.895 -0.681,1.776 -1.052,2.582 -0.378,0.804 -0.739,1.571 -1.081,2.299 -0.653,1.48 -1.367,2.716 -1.96,3.821 -0.298,0.552 -0.574,1.062 -0.828,1.53 -0.288,0.45 -0.549,0.859 -0.785,1.225 -0.945,1.46 -1.448,2.238 -1.448,2.238 0,0 0.584,-0.72 1.678,-2.071 0.273,-0.339 0.576,-0.718 0.909,-1.134 0.306,-0.442 0.637,-0.924 0.996,-1.445 0.724,-1.041 1.575,-2.242 2.358,-3.671 0.41,-0.706 0.843,-1.451 1.297,-2.231 0.451,-0.784 0.844,-1.642 1.298,-2.517 0.438,-0.883 0.929,-1.788 1.359,-2.762 0.419,-0.979 0.852,-1.992 1.302,-3.039 0.469,-1.042 0.899,-2.137 1.301,-3.28 0.419,-1.138 0.853,-2.309 1.294,-3.511 0.376,-1.223 0.765,-2.478 1.159,-3.763 0.198,-0.644 0.394,-1.296 0.594,-1.954 0.167,-0.668 0.337,-1.342 0.509,-2.023 1.485,-5.431 2.527,-11.461 3.218,-17.889 0.72,-6.429 0.802,-13.289 0.31,-20.354 -0.163,-1.765 -0.327,-3.545 -0.491,-5.337 M 318.939,278.217 c -0.669,-0.571 -1.308,-1.417 -2.107,-2.298 -0.82,-0.859 -1.6,-1.969 -2.478,-3.146 -0.45,-0.578 -0.892,-1.198 -1.288,-1.888 -0.421,-0.666 -0.856,-1.355 -1.305,-2.063 -0.433,-0.716 -0.799,-1.499 -1.215,-2.271 -0.405,-0.779 -0.854,-1.554 -1.192,-2.405 -0.367,-0.833 -0.74,-1.68 -1.118,-2.537 -0.314,-0.882 -0.632,-1.775 -0.953,-2.675 -0.356,-0.887 -0.601,-1.818 -0.851,-2.751 -0.232,-0.936 -0.571,-1.852 -0.714,-2.811 -0.194,-0.948 -0.384,-1.897 -0.576,-2.843 -0.176,-0.947 -0.236,-1.907 -0.358,-2.852 l -0.163,-1.413 c -0.018,-0.472 -0.037,-0.94 -0.057,-1.406 -0.027,-0.932 -0.089,-1.855 -0.088,-2.762 0.157,-1.801 0.08,-3.579 0.407,-5.217 0.118,-0.827 0.233,-1.631 0.345,-2.41 0.187,-0.764 0.368,-1.502 0.539,-2.211 0.192,-0.705 0.3,-1.409 0.54,-2.033 0.222,-0.63 0.434,-1.23 0.634,-1.792 0.2,-0.569 0.386,-1.1 0.559,-1.591 0.224,-0.47 0.43,-0.901 0.614,-1.288 0.739,-1.584 1.16,-2.489 1.16,-2.489 0,0 -0.594,0.793 -1.617,2.231 -0.253,0.363 -0.533,0.764 -0.839,1.201 -0.246,0.471 -0.511,0.982 -0.797,1.525 -0.284,0.55 -0.586,1.135 -0.905,1.751 -0.333,0.615 -0.512,1.325 -0.793,2.034 -0.26,0.719 -0.527,1.471 -0.807,2.247 -0.184,0.803 -0.375,1.634 -0.571,2.488 -0.472,1.703 -0.561,3.559 -0.788,5.467 -0.046,0.956 -0.027,1.931 -0.045,2.919 -0.002,0.494 -0.005,0.991 -0.008,1.49 0.05,0.497 0.099,0.996 0.149,1.497 0.112,1 0.163,2.018 0.333,3.021 0.185,1.001 0.375,2.006 0.562,3.011 0.172,1.009 0.538,1.97 0.797,2.954 0.28,0.978 0.556,1.953 0.945,2.882 0.353,0.94 0.715,1.868 1.092,2.777 0.439,0.881 0.872,1.751 1.296,2.607 0.402,0.867 0.888,1.673 1.384,2.447 0.497,0.774 0.942,1.554 1.449,2.265 1.073,1.385 1.982,2.765 3.073,3.84 0.517,0.556 1.013,1.089 1.487,1.595 0.463,0.511 1.012,0.909 1.465,1.326 0.938,0.807 1.728,1.531 2.477,1.983 1.461,0.963 2.295,1.513 2.295,1.513 0,0 -0.716,-0.698 -1.969,-1.919 m -2.662,-63.261 c 0.614,0.181 1.156,0.213 1.479,0.218 0.338,-0.008 0.517,-0.012 0.517,-0.012 0,0 -0.174,-0.045 -0.502,-0.128 -0.333,-0.096 -0.762,-0.271 -1.306,-0.563 -1.085,-0.567 -2.488,-1.617 -4.027,-3.042 -1.541,-1.424 -3.219,-3.214 -4.923,-5.216 -0.865,-0.991 -1.692,-2.07 -2.549,-3.15 -0.858,-1.083 -1.683,-2.218 -2.486,-3.367 -0.815,-1.139 -1.613,-2.295 -2.347,-3.463 -0.735,-1.167 -1.468,-2.309 -2.119,-3.45 -0.65,-1.142 -1.271,-2.25 -1.826,-3.321 -0.533,-1.079 -1.04,-2.102 -1.466,-3.065 -0.422,-0.965 -0.786,-1.862 -1.096,-2.668 -0.285,-0.809 -0.548,-1.519 -0.72,-2.118 -0.372,-1.189 -0.545,-1.894 -0.545,-1.894 0,0 -0.002,0.18 -0.004,0.517 0.008,0.337 -0.034,0.842 0.034,1.473 0.066,1.269 0.323,3.084 0.905,5.194 0.284,1.059 0.645,2.19 1.096,3.36 0.454,1.168 0.958,2.393 1.574,3.613 0.616,1.217 1.245,2.486 2.005,3.7 0.738,1.229 1.534,2.447 2.363,3.644 0.856,1.174 1.737,2.332 2.65,3.435 0.902,1.116 1.874,2.139 2.824,3.121 0.938,0.991 1.931,1.87 2.879,2.69 0.957,0.814 1.901,1.538 2.82,2.146 1.809,1.246 3.513,2.03 4.77,2.346 m -29.474,70.8 c -0.455,0.111 -0.912,0.221 -1.372,0.332 l -1.357,0.452 c -1.806,0.63 -3.591,1.451 -5.249,2.477 -1.66,1.02 -3.196,2.227 -4.584,3.519 -1.403,1.276 -2.633,2.674 -3.762,4.033 -2.262,2.726 -4.089,5.4 -5.954,7.343 -0.926,0.974 -1.863,1.764 -2.799,2.29 -0.921,0.564 -1.838,0.823 -2.61,1.008 -0.395,0.05 -0.749,0.095 -1.055,0.134 -0.311,0.035 -0.579,0.007 -0.795,0.014 -0.439,-0.002 -0.672,-0.004 -0.672,-0.004 0,0 0.227,0.051 0.656,0.146 0.43,0.123 1.07,0.206 1.917,0.232 0.417,-0.037 0.891,-0.057 1.397,-0.141 0.497,-0.121 1.055,-0.231 1.598,-0.48 1.124,-0.425 2.289,-1.15 3.39,-2.088 2.252,-1.845 4.343,-4.409 6.673,-6.926 1.149,-1.28 2.418,-2.49 3.723,-3.676 1.312,-1.183 2.736,-2.257 4.258,-3.163 1.489,-0.957 3.094,-1.727 4.732,-2.328 1.631,-0.617 3.303,-1.08 4.957,-1.398 1.653,-0.307 3.279,-0.529 4.836,-0.63 0.778,-0.09 1.54,-0.073 2.279,-0.1 0.738,-0.024 1.455,-0.065 2.14,-0.028 1.378,0.038 2.647,0.049 3.765,0.15 1.119,0.077 2.108,0.118 2.921,0.224 1.627,0.163 2.56,0.232 2.56,0.232 0,0 -0.892,-0.286 -2.46,-0.744 -0.781,-0.243 -1.748,-0.472 -2.874,-0.704 -1.122,-0.272 -2.402,-0.476 -3.806,-0.659 -0.7,-0.118 -1.44,-0.162 -2.203,-0.226 -0.767,-0.06 -1.559,-0.122 -2.377,-0.104 -1.636,-0.025 -3.378,0.041 -5.164,0.307 -0.893,0.144 -1.805,0.264 -2.709,0.506 m -0.802,-114.162 c -0.288,-0.356 -0.738,-0.87 -1.188,-1.585 -0.231,-0.347 -0.489,-0.734 -0.769,-1.153 -0.257,-0.441 -0.532,-0.917 -0.828,-1.425 -0.611,-0.998 -1.16,-2.219 -1.831,-3.491 -0.598,-1.319 -1.275,-2.723 -1.895,-4.26 -0.671,-1.511 -1.231,-3.168 -1.896,-4.843 -0.585,-1.706 -1.215,-3.459 -1.761,-5.273 -0.28,-0.904 -0.562,-1.816 -0.847,-2.73 -0.244,-0.927 -0.49,-1.855 -0.736,-2.786 -0.559,-1.843 -0.919,-3.735 -1.381,-5.573 -0.353,-1.86 -0.779,-3.68 -1.093,-5.458 -0.253,-1.788 -0.627,-3.501 -0.826,-5.148 -0.183,-1.646 -0.448,-3.2 -0.595,-4.643 -0.122,-1.446 -0.26,-2.772 -0.386,-3.951 -0.112,-1.179 -0.146,-2.21 -0.212,-3.061 -0.136,-1.708 -0.211,-2.683 -0.211,-2.683 0,0 -0.131,0.967 -0.315,2.673 -0.075,0.853 -0.228,1.892 -0.271,3.085 -0.044,1.193 -0.094,2.543 -0.113,4.018 -0.022,1.475 0.075,3.07 0.147,4.761 0.07,1.692 0.295,3.461 0.49,5.299 0.25,1.828 0.533,3.719 0.896,5.625 0.44,1.889 0.778,3.836 1.326,5.733 0.268,0.949 0.534,1.898 0.802,2.843 0.305,0.934 0.608,1.864 0.911,2.786 0.282,0.928 0.623,1.832 0.98,2.713 0.354,0.885 0.682,1.765 1.041,2.618 0.743,1.697 1.469,3.329 2.277,4.825 0.738,1.525 1.595,2.892 2.349,4.161 0.82,1.24 1.546,2.383 2.318,3.317 0.374,0.471 0.724,0.911 1.049,1.319 0.362,0.381 0.694,0.733 0.994,1.05 0.572,0.657 1.124,1.039 1.472,1.337 0.358,0.29 0.545,0.445 0.545,0.445 0,0 -0.153,-0.191 -0.443,-0.545 m -12.848,-64.674 -0.004,-0.066 -0.008,-0.136 c -0.091,-1.428 -0.219,-2.894 -0.375,-4.374 l -0.951,-8.681 -2.002,-17.198 -0.242,-2.149 -0.24,-2.147 c -0.075,-0.716 -0.161,-1.433 -0.245,-2.148 -0.083,-0.716 -0.165,-1.431 -0.232,-2.145 l -0.43,-4.291 c -0.134,-1.429 -0.152,-2.815 -0.249,-4.233 -0.071,-0.867 -0.005,-1.418 -0.197,-2.281 -0.037,-0.21 -0.083,-0.414 -0.138,-0.612 -0.164,-0.593 -0.406,-1.136 -0.68,-1.659 -0.582,-1.039 -1.399,-1.903 -2.327,-2.582 -0.31,-0.227 -0.631,-0.433 -0.96,-0.618 -1.325,-0.738 -2.792,-1.181 -4.28,-1.273 -1.465,-0.092 -3.072,0.25 -4.099,1.304 0.289,-0.231 0.602,-0.406 0.928,-0.537 0.654,-0.263 1.366,-0.349 2.072,-0.335 0.353,0.007 0.703,0.038 1.044,0.085 1.386,0.218 2.709,0.767 3.841,1.548 1.131,0.782 2.054,1.829 2.592,3.022 0.181,0.413 0.313,0.841 0.411,1.264 0.044,0.188 0.097,0.378 0.115,0.56 0.126,0.55 0.022,1.462 0.042,2.034 -0.012,1.468 -0.085,2.974 -0.011,4.425 l 0.22,4.351 c 0.105,2.177 0.303,4.337 0.486,6.499 0.061,0.722 0.12,1.442 0.174,2.165 0.249,2.883 0.553,5.758 0.853,8.634 0.317,2.872 0.604,5.749 0.962,8.616 l 1.024,8.536 c 0.176,1.339 0.348,2.694 0.477,4.093 -0.127,0.039 -0.285,0.077 -0.461,0.098 -0.206,0.026 -0.427,0.039 -0.655,0.042 -0.227,0.004 -0.461,-10e-4 -0.693,-0.009 -0.397,-0.731 -0.804,-1.455 -1.21,-2.181 -0.709,-1.27 -1.425,-2.534 -2.142,-3.8 -0.352,-0.623 -0.716,-1.24 -1.076,-1.859 -0.899,-1.548 -1.81,-3.088 -2.734,-4.621 -0.514,-0.862 -1.048,-1.711 -1.583,-2.56 -0.803,-1.272 -1.619,-2.538 -2.449,-3.794 -0.699,-1.045 -1.407,-2.083 -2.148,-3.097 -0.366,-0.511 -0.761,-1.002 -1.171,-1.482 -0.206,-0.239 -0.418,-0.474 -0.641,-0.694 -0.232,-0.199 -0.464,-0.478 -0.789,-0.493 0.311,0.054 0.501,0.349 0.7,0.572 0.19,0.243 0.369,0.499 0.54,0.759 0.173,0.258 0.328,0.529 0.489,0.796 0.16,0.267 0.326,0.531 0.487,0.796 0.637,1.071 1.24,2.165 1.831,3.263 1.186,2.197 2.293,4.438 3.45,6.65 l 6.753,13.372 0.267,0.534 0.603,0.071 c 0.818,0.095 1.565,0.129 2.427,0.058 0.324,-0.039 0.658,-0.08 1.041,-0.207 0.128,-0.042 0.261,-0.094 0.402,-0.159 0.055,-0.026 0.112,-0.056 0.169,-0.088 0.087,-0.048 0.176,-0.104 0.274,-0.187 0.092,-0.063 0.183,-0.152 0.271,-0.255 0.059,-0.069 0.119,-0.139 0.175,-0.227 0.052,-0.07 0.087,-0.154 0.123,-0.236 0.064,-0.144 0.114,-0.298 0.149,-0.457 l 0.01,-0.051 0.009,-0.042 0.007,-0.046 c 10e-4,0.003 0.005,-0.135 0.005,-0.151 0,-0.01 0,-0.01 -10e-4,0.014 M 248.004,82.141 c -0.326,0.015 -0.557,0.294 -0.788,0.493 -0.112,0.11 -0.215,0.231 -0.321,0.346 -0.107,0.117 -0.219,0.229 -0.322,0.348 -0.408,0.48 -0.803,0.972 -1.171,1.482 -0.741,1.014 -1.448,2.052 -2.145,3.097 -1.385,2.094 -2.749,4.2 -4.032,6.354 -0.37,0.613 -0.735,1.229 -1.102,1.843 -0.918,1.538 -1.829,3.079 -2.709,4.637 -0.016,0.029 -0.032,0.057 -0.048,0.085 -1.095,1.932 -2.194,3.859 -3.257,5.811 -0.016,0.028 -0.032,0.056 -0.048,0.085 -0.154,0.006 -0.308,0.006 -0.461,0.007 -0.077,0 -0.155,0.003 -0.231,0.002 -0.076,-10e-4 -0.144,-0.01 -0.218,-0.013 -0.149,-0.007 -0.299,-0.012 -0.437,-0.029 -0.177,-0.021 -0.334,-0.059 -0.462,-0.098 0.065,-0.699 0.141,-1.388 0.222,-2.069 0.081,-0.68 0.167,-1.354 0.255,-2.022 l 0.512,-4.269 0.512,-4.268 c 0.357,-2.866 0.643,-5.743 0.964,-8.615 0.085,-0.823 0.168,-1.645 0.253,-2.466 0.212,-2.055 0.419,-4.11 0.597,-6.169 0.048,-0.643 0.101,-1.283 0.155,-1.924 0.189,-2.244 0.397,-4.483 0.506,-6.741 l 0.22,-4.35 c 0.052,-1.037 0.031,-2.099 0.01,-3.158 -0.008,-0.423 -0.018,-0.849 -0.021,-1.268 0.009,-0.285 -0.012,-0.656 -0.02,-1.025 -0.008,-0.368 -0.002,-0.734 0.061,-1.009 0.06,-0.592 0.265,-1.225 0.526,-1.824 0.12,-0.265 0.266,-0.519 0.421,-0.769 0.546,-0.873 1.292,-1.644 2.171,-2.253 1.131,-0.78 2.456,-1.33 3.841,-1.548 0.341,-0.047 0.692,-0.079 1.045,-0.086 1.059,-0.021 2.131,0.183 2.997,0.873 0,-10e-4 0,-10e-4 -0.001,-0.002 0.001,0.001 0.001,0.001 0.002,0.002 -0.897,-0.922 -2.24,-1.299 -3.542,-1.318 -0.187,-0.002 -0.372,0.002 -0.555,0.014 -1.488,0.092 -2.954,0.535 -4.28,1.273 -1.317,0.742 -2.51,1.816 -3.289,3.201 -0.364,0.697 -0.671,1.43 -0.815,2.27 -0.043,0.192 -0.069,0.365 -0.091,0.533 -0.054,0.419 -0.061,0.794 -0.077,1.214 -0.006,0.168 -0.014,0.341 -0.029,0.534 -0.099,1.419 -0.116,2.805 -0.249,4.235 l -0.432,4.289 c -0.038,0.408 -0.087,0.817 -0.132,1.226 -0.114,1.021 -0.237,2.044 -0.344,3.067 l -0.241,2.147 -0.241,2.149 -1.001,8.599 -1.001,8.599 -0.475,4.341 -0.477,4.34 c -0.051,0.494 -0.095,0.982 -0.14,1.471 -0.046,0.491 -0.087,0.975 -0.125,1.458 -0.038,0.484 -0.078,0.969 -0.109,1.445 l -0.008,0.136 -0.005,0.064 c -0.001,-0.011 -0.001,-0.014 -0.001,-0.011 0,0.001 0,-0.004 0,-10e-4 0,0.019 0.004,0.157 0.006,0.155 l 0.004,0.023 0.003,0.022 0.019,0.094 c 0.055,0.25 0.128,0.501 0.273,0.692 0.1,0.157 0.208,0.271 0.316,0.368 0.044,0.039 0.087,0.083 0.13,0.113 0.164,0.137 0.305,0.207 0.444,0.274 0.281,0.128 0.533,0.207 0.769,0.259 0.236,0.053 0.456,0.08 0.673,0.106 0.016,0.001 0.03,0 0.045,0.001 0.84,0.067 1.578,0.034 2.382,-0.06 l 0.302,-0.035 0.301,-0.035 0.134,-0.268 0.135,-0.266 6.752,-13.372 c 1.155,-2.212 2.263,-4.453 3.449,-6.65 0.591,-1.098 1.193,-2.191 1.829,-3.263 0.162,-0.265 0.328,-0.529 0.488,-0.796 0.161,-0.267 0.317,-0.538 0.489,-0.796 0.171,-0.26 0.349,-0.514 0.542,-0.759 0.198,-0.223 0.385,-0.518 0.698,-0.572 h -0.001 z m -21.277,61.907 c -0.248,0.931 -0.493,1.859 -0.737,2.786 -0.284,0.914 -0.568,1.826 -0.847,2.73 -0.545,1.814 -1.175,3.567 -1.76,5.273 -0.666,1.675 -1.226,3.332 -1.898,4.843 -0.619,1.537 -1.297,2.941 -1.893,4.26 -0.673,1.272 -1.222,2.493 -1.832,3.491 -0.297,0.508 -0.572,0.984 -0.827,1.425 -0.282,0.419 -0.538,0.806 -0.771,1.153 -0.449,0.715 -0.898,1.229 -1.186,1.585 -0.29,0.354 -0.445,0.545 -0.445,0.545 0,0 0.19,-0.155 0.545,-0.445 0.35,-0.298 0.902,-0.68 1.474,-1.337 0.3,-0.317 0.632,-0.669 0.992,-1.05 0.326,-0.408 0.676,-0.848 1.051,-1.319 0.771,-0.934 1.498,-2.077 2.315,-3.317 0.756,-1.269 1.613,-2.636 2.352,-4.161 0.806,-1.496 1.533,-3.128 2.276,-4.825 0.36,-0.853 0.687,-1.733 1.04,-2.618 0.359,-0.881 0.698,-1.783 0.982,-2.713 0.301,-0.922 0.606,-1.852 0.912,-2.786 0.265,-0.945 0.532,-1.894 0.801,-2.843 0.546,-1.897 0.886,-3.844 1.326,-5.733 0.362,-1.905 0.644,-3.797 0.897,-5.625 0.194,-1.836 0.418,-3.607 0.487,-5.299 0.076,-1.691 0.169,-3.286 0.149,-4.759 -0.022,-1.477 -0.068,-2.827 -0.113,-4.02 -0.042,-1.193 -0.196,-2.232 -0.272,-3.085 -0.184,-1.706 -0.313,-2.673 -0.313,-2.673 0,0 -0.077,0.975 -0.211,2.683 -0.069,0.851 -0.101,1.882 -0.211,3.061 -0.127,1.179 -0.267,2.505 -0.39,3.951 -0.145,1.443 -0.411,2.997 -0.595,4.644 -0.198,1.646 -0.573,3.359 -0.825,5.147 -0.312,1.779 -0.74,3.598 -1.094,5.458 -0.46,1.838 -0.821,3.73 -1.379,5.573 m -11.318,54.185 c 0.908,-0.418 1.926,-1.118 3.141,-1.852 1.23,-0.728 2.434,-1.757 3.837,-2.801 0.671,-0.553 1.327,-1.177 2.033,-1.798 0.704,-0.625 1.421,-1.283 2.087,-2.026 0.684,-0.729 1.388,-1.476 2.107,-2.241 0.679,-0.797 1.334,-1.647 2.019,-2.496 0.702,-0.835 1.335,-1.745 1.971,-2.668 0.627,-0.928 1.335,-1.825 1.894,-2.825 0.584,-0.983 1.172,-1.975 1.764,-2.97 0.576,-1.003 1.075,-2.054 1.618,-3.08 l 0.78,-1.56 0.685,-1.596 c 0.447,-1.066 0.925,-2.116 1.342,-3.177 0.771,-2.152 1.557,-4.259 2.102,-6.365 0.286,-1.049 0.611,-2.067 0.847,-3.084 0.212,-1.024 0.419,-2.024 0.621,-2.998 0.463,-1.934 0.621,-3.817 0.869,-5.528 0.279,-1.708 0.267,-3.31 0.378,-4.705 0.121,-1.398 0.084,-2.623 0.062,-3.631 -0.053,-2.008 -0.087,-3.154 -0.087,-3.154 0,0 -0.157,1.135 -0.436,3.121 -0.121,0.991 -0.271,2.193 -0.541,3.556 -0.122,0.682 -0.252,1.409 -0.389,2.173 -0.122,0.766 -0.268,1.568 -0.478,2.394 -0.408,1.654 -0.729,3.466 -1.293,5.329 -0.261,0.935 -0.529,1.895 -0.801,2.877 -0.316,0.968 -0.639,1.956 -0.966,2.962 -0.595,2.032 -1.503,4.026 -2.251,6.11 -0.418,1.026 -0.895,2.036 -1.344,3.065 l -0.684,1.538 -0.772,1.498 c -0.512,1.001 -0.981,2.025 -1.526,3.003 -0.56,0.969 -1.115,1.936 -1.667,2.895 -0.536,0.97 -1.186,1.855 -1.751,2.78 -0.58,0.918 -1.154,1.824 -1.8,2.656 -0.622,0.849 -1.236,1.687 -1.834,2.505 -0.644,0.785 -1.276,1.551 -1.888,2.298 -0.592,0.768 -1.254,1.434 -1.875,2.101 -0.624,0.662 -1.205,1.328 -1.806,1.924 -0.619,0.576 -1.212,1.128 -1.777,1.652 -0.558,0.539 -1.091,1.046 -1.639,1.452 -1.088,0.831 -1.966,1.67 -2.813,2.215 -1.65,1.143 -2.593,1.796 -2.593,1.796 0,0 1.038,-0.489 2.854,-1.345 m -9.108,86.71 c -0.821,-0.018 -1.613,0.044 -2.377,0.104 -0.765,0.064 -1.504,0.108 -2.203,0.226 -1.407,0.183 -2.685,0.387 -3.806,0.659 -1.126,0.232 -2.094,0.461 -2.874,0.704 -1.568,0.458 -2.461,0.744 -2.461,0.744 0,0 0.934,-0.069 2.561,-0.232 0.812,-0.106 1.801,-0.147 2.921,-0.224 1.117,-0.101 2.387,-0.112 3.763,-0.15 0.688,-0.037 1.403,0.004 2.142,0.028 0.738,0.027 1.501,0.01 2.278,0.1 1.559,0.101 3.185,0.323 4.837,0.63 1.651,0.318 3.324,0.781 4.957,1.398 1.638,0.601 3.242,1.371 4.731,2.329 1.522,0.905 2.948,1.979 4.257,3.162 1.306,1.186 2.576,2.396 3.724,3.676 2.331,2.517 4.42,5.081 6.674,6.926 1.099,0.938 2.265,1.663 3.388,2.088 0.543,0.249 1.102,0.359 1.599,0.48 0.506,0.084 0.981,0.104 1.397,0.141 0.846,-0.026 1.488,-0.109 1.918,-0.232 0.428,-0.095 0.656,-0.146 0.656,-0.146 0,0 -0.235,0.002 -0.673,0.004 -0.217,-0.007 -0.483,0.021 -0.794,-0.014 -0.308,-0.039 -0.661,-0.084 -1.056,-0.134 -0.772,-0.185 -1.688,-0.444 -2.61,-1.008 -0.937,-0.526 -1.873,-1.316 -2.8,-2.29 -1.864,-1.942 -3.69,-4.617 -5.952,-7.343 -1.13,-1.359 -2.359,-2.757 -3.764,-4.033 -1.385,-1.292 -2.922,-2.499 -4.584,-3.519 -1.657,-1.026 -3.442,-1.847 -5.249,-2.477 l -1.357,-0.452 c -0.459,-0.111 -0.917,-0.221 -1.37,-0.332 -0.905,-0.242 -1.819,-0.362 -2.71,-0.506 -1.785,-0.266 -3.527,-0.332 -5.163,-0.307 m 2.319,-104.709 c -0.003,-0.337 -0.004,-0.517 -0.004,-0.517 0,0 -0.176,0.705 -0.546,1.894 -0.174,0.599 -0.434,1.309 -0.719,2.118 -0.31,0.806 -0.674,1.703 -1.096,2.668 -0.427,0.963 -0.934,1.986 -1.468,3.065 -0.554,1.07 -1.175,2.178 -1.824,3.321 -0.651,1.141 -1.385,2.283 -2.119,3.45 -0.736,1.168 -1.531,2.324 -2.349,3.462 -0.802,1.15 -1.627,2.284 -2.484,3.368 -0.86,1.079 -1.686,2.159 -2.55,3.15 -1.702,2.002 -3.382,3.792 -4.923,5.216 -1.539,1.425 -2.941,2.475 -4.026,3.042 -0.544,0.292 -0.974,0.467 -1.307,0.563 -0.328,0.083 -0.502,0.128 -0.502,0.128 0,0 0.18,0.004 0.518,0.012 0.322,-0.005 0.863,-0.037 1.478,-0.218 1.257,-0.316 2.961,-1.1 4.772,-2.346 0.919,-0.608 1.862,-1.332 2.818,-2.146 0.946,-0.82 1.941,-1.699 2.879,-2.691 0.95,-0.981 1.923,-2.004 2.824,-3.12 0.913,-1.103 1.794,-2.261 2.652,-3.435 0.828,-1.197 1.623,-2.415 2.361,-3.644 0.762,-1.214 1.39,-2.483 2.006,-3.7 0.615,-1.22 1.121,-2.445 1.572,-3.613 0.452,-1.17 0.814,-2.301 1.098,-3.36 0.582,-2.11 0.839,-3.925 0.903,-5.194 0.067,-0.631 0.028,-1.136 0.036,-1.473 m -21.999,92.539 c -0.878,1.177 -1.656,2.287 -2.476,3.146 -0.798,0.881 -1.438,1.727 -2.108,2.298 -1.253,1.221 -1.97,1.919 -1.97,1.919 0,0 0.835,-0.55 2.296,-1.513 0.749,-0.452 1.538,-1.176 2.479,-1.983 0.453,-0.417 1.003,-0.816 1.465,-1.327 0.472,-0.505 0.967,-1.038 1.485,-1.594 1.093,-1.075 2,-2.455 3.073,-3.84 0.508,-0.712 0.95,-1.491 1.448,-2.265 0.498,-0.774 0.983,-1.58 1.385,-2.447 0.425,-0.856 0.858,-1.727 1.296,-2.607 0.376,-0.909 0.738,-1.837 1.092,-2.777 0.39,-0.929 0.664,-1.904 0.944,-2.883 0.26,-0.983 0.626,-1.944 0.798,-2.953 0.188,-1.005 0.376,-2.01 0.563,-3.011 0.169,-1.003 0.219,-2.021 0.334,-3.021 0.047,-0.501 0.097,-1 0.145,-1.497 -0.002,-0.499 -0.005,-0.996 -0.007,-1.49 -0.016,-0.988 0.002,-1.963 -0.046,-2.919 -0.224,-1.908 -0.314,-3.764 -0.786,-5.467 -0.196,-0.854 -0.386,-1.685 -0.571,-2.488 -0.278,-0.776 -0.548,-1.528 -0.808,-2.246 -0.281,-0.71 -0.46,-1.42 -0.793,-2.035 -0.318,-0.616 -0.62,-1.201 -0.905,-1.751 -0.285,-0.543 -0.55,-1.054 -0.797,-1.525 -0.305,-0.437 -0.585,-0.838 -0.839,-1.201 -1.022,-1.438 -1.616,-2.231 -1.616,-2.231 0,0 0.422,0.905 1.16,2.489 0.184,0.387 0.389,0.818 0.614,1.288 0.172,0.491 0.358,1.022 0.559,1.591 0.198,0.562 0.412,1.162 0.634,1.792 0.239,0.624 0.349,1.328 0.539,2.033 0.174,0.709 0.354,1.447 0.539,2.211 0.112,0.779 0.228,1.583 0.347,2.41 0.326,1.638 0.249,3.415 0.406,5.217 0,0.907 -0.062,1.83 -0.088,2.761 -0.02,0.467 -0.038,0.935 -0.058,1.406 l -0.162,1.414 c -0.124,0.944 -0.182,1.905 -0.359,2.852 -0.19,0.946 -0.382,1.894 -0.574,2.843 -0.145,0.959 -0.485,1.875 -0.715,2.811 -0.25,0.933 -0.493,1.864 -0.852,2.751 -0.32,0.899 -0.637,1.793 -0.951,2.675 -0.378,0.857 -0.752,1.704 -1.12,2.537 -0.337,0.85 -0.785,1.626 -1.189,2.405 -0.417,0.772 -0.785,1.555 -1.216,2.271 -0.449,0.708 -0.885,1.397 -1.306,2.063 -0.394,0.69 -0.837,1.31 -1.289,1.888 m -21.284,5.129 c -1.735,0.124 -4.282,0.305 -7.524,0.536 -0.811,0.063 -1.666,0.129 -2.563,0.199 -0.89,0.121 -1.82,0.247 -2.792,0.379 -1.943,0.277 -4.045,0.576 -6.291,0.896 -1.121,0.18 -2.292,0.293 -3.473,0.541 -1.181,0.247 -2.398,0.502 -3.644,0.762 -2.489,0.554 -5.136,1.041 -7.843,1.77 -2.697,0.78 -5.508,1.593 -8.417,2.434 -2.883,0.935 -5.787,2.142 -8.818,3.254 -1.534,0.521 -2.989,1.285 -4.5,1.971 -1.506,0.704 -3.031,1.416 -4.572,2.136 -1.567,0.672 -3.002,1.645 -4.524,2.484 -1.504,0.875 -3.023,1.759 -4.555,2.65 -1.459,1.012 -2.93,2.032 -4.412,3.061 -0.742,0.515 -1.485,1.031 -2.231,1.55 -0.753,0.511 -1.42,1.141 -2.138,1.709 -1.412,1.169 -2.832,2.345 -4.26,3.527 -1.387,1.229 -2.655,2.604 -3.996,3.91 l -1.992,1.992 c -0.648,0.679 -1.226,1.426 -1.843,2.14 -1.209,1.448 -2.457,2.876 -3.641,4.357 -2.181,3.106 -4.496,6.146 -6.317,9.503 -0.961,1.646 -1.94,3.282 -2.707,5.027 -0.805,1.724 -1.678,3.416 -2.415,5.16 -0.684,1.767 -1.367,3.531 -2.045,5.29 -0.694,1.754 -1.138,3.584 -1.715,5.363 -0.265,0.895 -0.556,1.783 -0.8,2.681 l -0.62,2.713 c -0.364,1.814 -0.881,3.589 -1.103,5.406 -0.275,1.806 -0.55,3.601 -0.824,5.383 -0.165,1.792 -0.329,3.572 -0.492,5.337 -0.491,7.065 -0.41,13.925 0.311,20.354 0.69,6.428 1.732,12.458 3.219,17.889 0.171,0.681 0.341,1.355 0.508,2.023 0.2,0.658 0.397,1.31 0.591,1.954 0.397,1.285 0.784,2.54 1.161,3.763 0.442,1.202 0.874,2.373 1.294,3.511 0.403,1.143 0.833,2.238 1.302,3.28 0.448,1.047 0.883,2.061 1.302,3.039 0.429,0.974 0.921,1.879 1.357,2.762 0.455,0.876 0.85,1.733 1.299,2.517 0.454,0.78 0.887,1.525 1.299,2.231 0.781,1.429 1.632,2.63 2.356,3.671 0.358,0.521 0.691,1.003 0.996,1.445 0.335,0.416 0.637,0.795 0.91,1.134 1.094,1.351 1.677,2.071 1.677,2.071 0,0 -0.503,-0.778 -1.447,-2.238 -0.236,-0.366 -0.496,-0.775 -0.785,-1.225 -0.253,-0.468 -0.529,-0.978 -0.828,-1.53 -0.592,-1.105 -1.308,-2.341 -1.961,-3.82 -0.341,-0.729 -0.702,-1.496 -1.08,-2.3 -0.372,-0.806 -0.686,-1.687 -1.053,-2.582 -0.348,-0.905 -0.751,-1.828 -1.107,-2.811 -0.341,-0.988 -0.694,-2.012 -1.058,-3.069 -0.385,-1.05 -0.725,-2.151 -1.037,-3.299 -0.329,-1.14 -0.665,-2.313 -1.013,-3.517 -0.292,-1.217 -0.591,-2.466 -0.899,-3.745 -0.153,-0.638 -0.311,-1.283 -0.468,-1.936 -0.125,-0.66 -0.253,-1.327 -0.382,-2.002 -1.136,-5.37 -1.799,-11.29 -2.249,-17.532 -0.07,-1.564 -0.141,-3.149 -0.215,-4.755 0.01,-1.604 0.02,-3.229 0.03,-4.87 -0.026,-1.642 0.113,-3.295 0.2,-4.966 0.108,-1.668 0.138,-3.359 0.379,-5.044 0.567,-6.786 2.108,-13.665 4.1,-20.47 0.563,-1.683 0.995,-3.421 1.667,-5.076 0.658,-1.66 1.316,-3.324 1.977,-4.993 0.712,-1.644 1.555,-3.233 2.325,-4.856 0.735,-1.645 1.674,-3.178 2.594,-4.722 1.698,-3.179 3.858,-6.06 5.887,-9.012 1.107,-1.406 2.276,-2.761 3.404,-4.141 0.579,-0.678 1.116,-1.391 1.725,-2.039 l 1.87,-1.896 c 4.831,-5.204 10.416,-9.477 15.93,-13.424 1.45,-0.891 2.885,-1.773 4.307,-2.648 0.711,-0.436 1.421,-0.871 2.127,-1.303 0.695,-0.452 1.401,-0.875 2.142,-1.231 1.457,-0.756 2.898,-1.504 4.323,-2.242 1.432,-0.724 2.808,-1.526 4.275,-2.09 2.893,-1.207 5.675,-2.472 8.434,-3.54 2.794,-0.986 5.493,-1.939 8.086,-2.854 2.609,-0.876 5.185,-1.475 7.593,-2.199 1.209,-0.348 2.388,-0.687 3.534,-1.016 1.146,-0.332 2.289,-0.527 3.382,-0.785 2.194,-0.488 4.248,-0.945 6.147,-1.368 0.951,-0.216 1.863,-0.423 2.734,-0.622 0.881,-0.148 1.72,-0.289 2.516,-0.423 3.192,-0.555 5.701,-0.992 7.411,-1.289 1.712,-0.304 2.626,-0.466 2.626,-0.466 0,0 -0.924,0.063 -2.658,0.181 m 269.802,164.01 c -9.965,13.389 -22.258,22.169 -12.38,2.414 15.737,-31.474 30.269,-130.166 -110.522,-136.752 l 0.165,-4.828 c -11.964,-6.806 -14.502,-7.245 -24.16,-2.854 -9.657,4.39 -12.252,17.561 -38.592,16.024 -26.339,1.537 -28.095,-11.634 -37.754,-16.024 -9.658,-4.391 -11.359,-3.952 -23.322,2.854 l 0.165,4.828 C 47.948,314.16 62.48,412.852 78.218,444.326 88.096,464.081 75.803,455.301 65.836,441.912 42.596,410.686 15.768,283.648 168.652,265.649 l 3.292,1.295 c 10.318,-10.096 14.268,-10.734 14.706,-14.685 0.44,-3.951 0.436,-18.22 -6.367,-32.707 -1.757,-17.34 12.232,-36.437 17.006,-40.059 4.774,-3.622 7.892,-1.975 10.36,-8.56 2.471,-6.585 -0.624,-20.085 7.719,-31.72 8.34,-11.633 5.226,-18.877 10.495,-34.023 5.267,-15.146 -5.571,-50.691 1.453,-56.295 7.025,-5.605 19.481,-4.068 19.481,-4.068 0.879,3.457 2.853,6.749 2.853,6.749 0,0 2.814,-3.292 3.693,-6.749 0,0 12.874,-1.537 19.898,4.068 7.025,5.604 -3.604,41.149 1.663,56.295 5.269,15.146 2.258,22.39 10.6,34.023 8.343,11.635 5.302,25.135 7.77,31.72 2.469,6.585 5.614,4.938 10.387,8.56 4.775,3.622 18.776,22.719 17.02,40.059 -6.804,14.487 -6.8,28.756 -6.363,32.707 0.44,3.951 4.394,4.589 14.709,14.685 l 3.293,-1.295 c 152.889,17.999 126.061,145.037 102.819,176.263" />
        </g>
      </svg>
    </Box>
  );
};
