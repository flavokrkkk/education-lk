import { Icon, IconTypes } from "@/shared";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-20 text-white border-b border-zinc-600">
      <div className="flex items-center h-full">
        <div className="h-full flex items-center px-10 border-r border-zinc-600">
          <img
            src="https://storage.yandexcloud.net/gravity-landing-static/_next/static/media/logo.ef46ce2b.svg "
            alt="GravityUI Logo"
            className="h-8 w-auto"
          />
        </div>

        <nav className="space-x-6 text-sm font-medium border-r border-zinc-600 flex-1 px-10 h-full flex items-center">
          <Link
            to="/biblioteki"
            className="text-xl text-zinc-300 hover:text-zinc-400 transition-colors"
          >
            Библиотеки
          </Link>
          <Link
            to="/komponenty"
            className="text-xl text-zinc-300 hover:text-zinc-400 transition-colors"
          >
            Компоненты
          </Link>
          <Link
            to="/dizayn"
            className="text-xl text-zinc-300 hover:text-zinc-400 transition-colors"
          >
            Дизайн
          </Link>
          <Link
            to="/ikony"
            className="text-xl text-zinc-300 hover:text-zinc-400 transition-colors"
          >
            Иконки
          </Link>
          <Link
            to="/temizator"
            className="text-xl text-zinc-300 hover:text-zinc-400 transition-colors"
          >
            Темизатор
          </Link>
        </nav>
        <div className="flex items-center space-x-5 px-10">
          <span className="text-gray-300 hover:text-white cursor-pointer">
            <Icon type={IconTypes.TELEGRAM_OUTLINED} className="text-xl" />
          </span>
          <span className="text-gray-300 hover:text-white cursor-pointer">
            <Icon type={IconTypes.FIGMA_OUTLINED} className="text-xl" />
          </span>
          <span className="text-gray-300 hover:text-white cursor-pointer">
            <Icon type={IconTypes.GITHUB_OUTLINED} className="text-xl" />
          </span>
        </div>
      </div>
    </header>
  );
};
