import {
  Badge,
  Box,
  Button,
  Flex,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import React, {  useEffect } from "react";
import { useLogoutMutation } from "../../RTK/API/Auth";
import Cookies from "js-cookie";
import {
  AddIcon,
  
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

 

  const token = Cookies.get("ID");

  const [signout] = useLogoutMutation();
  const cart = useSelector((state) => state.CartSlice.cart);
  const cookieNames = Object.keys(Cookies.get());

  const Logout = async () => {
    const bye = await signout(token);

    cookieNames?.map((cookie) => {
      Cookies.remove(cookie);
    });

    window.location.reload(true);
  };

  useEffect(() => {}, []);

  return (
    <Flex
      position={"fixed"}
      zIndex={"99"}
      w={"100%"}
      h={"60px"}
      bg={"gray.500"}
      justify={"space-between"}
      alignItems={"center"}
      padding={"3"}
    >
      <Flex alignItems={"center"} gap={"4"}>
        <Link href="/" rounded={"full"} w={"60px"} p={"0"}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Alogo" filter="url(#filter0_i_1_5)">
              <path
                d="M60.9632 79.0941C43.2381 86.8057 22.6176 78.6883 14.9059 60.9632V60.9632C7.19427 43.2381 15.3117 22.6176 33.0368 14.9059V14.9059C50.7618 7.19427 71.3824 15.3117 79.0941 33.0368L87.6082 52.6063C90.6176 59.5234 87.4499 67.5705 80.5328 70.5799L60.9632 79.0941Z"
                fill="#131314"
              />
              <g id="AnyNote." filter="url(#filter1_i_1_5)">
                <path
                  d="M30.4974 61.7031L44.6117 26.7691V26.7691C49.4401 26.7918 53.7648 29.7612 55.5203 34.2592L62.7157 52.6955C64.434 57.0982 61.1732 61.8473 56.4471 61.8251V61.8251L54.3328 56.0151L51.7811 49.003L50.5235 45.5471C50.1944 44.6455 49.8983 43.8108 49.6353 43.0429C49.3722 42.2749 49.1258 41.5238 48.8959 40.7894C48.7381 40.2853 48.5804 39.7734 48.4227 39.2536C48.3506 39.0161 48.2785 38.7769 48.2065 38.5361C48.0101 37.7685 47.8306 36.9343 47.6682 36.0335L49.2684 35.991C49.0639 36.9568 48.8431 37.8224 48.6062 38.588C48.5464 38.8127 48.4853 39.0346 48.4227 39.2536C48.272 39.7807 48.113 40.2911 47.9459 40.7849C47.7093 41.4838 47.4391 42.2159 47.1355 42.9811C46.8653 43.7465 46.5613 44.5951 46.2236 45.5268L44.9335 48.9708L42.316 55.9586V55.9586C41.0127 59.4379 37.6799 61.7369 33.9646 61.7194L30.4974 61.7031ZM37.3245 55.9351L40.3074 48.9491L44.9335 48.9708L51.7811 49.003L56.5072 49.0252L59.2243 56.0381L54.3328 56.0151L42.316 55.9586L37.3245 55.9351Z"
                  fill="#4267B2"
                />
                <path
                  d="M73.4969 61.9052C71.9969 61.8982 70.8322 61.476 70.0028 60.6388C69.2067 59.8017 68.8123 58.6165 68.8195 57.0832C68.8261 55.6832 69.2648 54.5353 70.1357 53.6393C71.0066 52.7434 72.142 52.2988 73.542 52.3053C75.0087 52.3122 76.1567 52.7343 76.9861 53.5715C77.8155 54.4088 78.2266 55.5941 78.2194 57.1274C78.2128 58.5274 77.7741 59.6753 76.9032 60.5712C76.0323 61.4671 74.8969 61.9118 73.4969 61.9052Z"
                  fill="#ffffff"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_i_1_5"
                x="0.942719"
                y="0.94273"
                width="92.1145"
                height="92.1145"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1_5"
                />
              </filter>
              <filter
                id="filter1_i_1_5"
                x="30.4973"
                y="26.7691"
                width="47.7221"
                height="39.1362"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1_5"
                />
              </filter>
            </defs>
          </svg>
        </Link>

        <SearchBar />
      </Flex>

      <Flex alignItems={"center"} justify={"center"} gap={"3"}>
        <Flex
          className="cart"
          justifyContent={"center"}
          alignItems={"center"}
          gap={"3"}
        >
          <Button rounded={"full"} w={"30px"}>
            <Link
              rounded={"full"}
              w={"30px"}
              h={"30px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              href="/addproduct"
            >
              <AddIcon />
            </Link>
          </Button>
          {/* <MenuIcon   Logout={Logout} /> */}

          <Button
            position={"relative"}
            rounded={"full"}
            w={"30px"}
            p={"0"}
            as="button"
            aria-label="notifications"
            icon={HiShoppingCart}
          >
            <Link
              rounded={"full"}
              w={"30px"}
              h={"30px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              href="/cart"
            >
              {cart?.length > 0 && (
                <Badge
                  top={"-1"}
                  right={"-1"}
                  position={"absolute"}
                  roundedBottomRight={"full"}
                  roundedTop={"full"}
                  boxSize="1rem"
                  color="red.500"
                >
                  {" "}
                  {cart?.length}{" "}
                </Badge>
              )}
              <HiShoppingCart />
            </Link>
          </Button>
        </Flex>

        <Box>
          <Button rounded={"full"} w={"30px"} onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
