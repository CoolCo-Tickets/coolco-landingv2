import { useState, useCallback, useEffect, useRef } from 'react';

/** Desktop: index 0=CASHLESS, 1=TICKETS, 2=FAN TO FAN. Mobile carousel: 0=TICKETS, 1=FAN TO FAN, 2=CASHLESS */
const DESKTOP_SECTIONS = [
  {
    id: 'cashless',
    label: 'CASHLESS',
    comingSoon: true,
    path: '/cashless',
    external: false,
    hoverClass: 'trapezoid-hover-cashless',
  },
  {
    id: 'tickets',
    label: 'TICKETS',
    comingSoon: false,
    path: 'https://ticketing.coolco.io/tickets-ar/es/main',
    external: true,
    hoverClass: 'trapezoid-hover-tickets',
  },
  {
    id: 'fantofan',
    label: 'FAN TO FAN',
    comingSoon: false,
    path: 'https://sell-ticket.f2f.coolco.io/es/landing',
    external: true,
    hoverClass: 'trapezoid-hover-fantofan',
  },
] as const;

const MOBILE_SECTIONS = [
  {
    id: 'cashless',
    label: 'CASHLESS',
    path: '/cashless',
    external: false,
    comingSoon: true,
  },
  {
    id: 'tickets',
    label: 'TICKETS',
    path: 'https://ticketing.coolco.io/tickets-ar/es/main',
    external: true,
    comingSoon: false,
  },
  {
    id: 'fantofan',
    label: 'FAN TO FAN',
    path: 'https://sell-ticket.f2f.coolco.io/es/landing',
    external: true,
    comingSoon: false,
  },
] as const;

const CAROUSEL_PAINT_DELAY_MS = 1000;

const TRAPEZOID_CLIPS = [
  'polygon(0 0, 33.33% 0, 28.33% 100%, 0 100%)',
  'polygon(33.33% 0, 66.66% 0, 61.66% 100%, 28.33% 100%)',
  'polygon(66.66% 0, 100% 0, 100% 100%, 61.66% 100%)',
] as const;

const TRAPEZOID_ORIGINS = ['left center', '47.5% center', 'right center'] as const;

/**
 * Visual center of each trapezoid (accounting for diagonal slant).
 * Rest:  computed from average of top and bottom midpoints of the clip-path.
 * Hover: computed from the expanded clip-path after scaleX 1.5 from each origin.
 */
const TRAPEZOID_LOGO_REST = ['15.4%', '47.5%', '82%'] as const;
const TRAPEZOID_LOGO_HOVER = ['23%', '47.5%', '73%'] as const;

/** Non-hover overlay per section. Center is lighter to create visible diagonal boundaries. */
const TRAPEZOID_REST_BG = [
  'rgba(0, 0, 0, 0.75)',
  'rgba(0, 0, 0, 0.35)',
  'rgba(0, 0, 0, 0.55)',
] as const;

function logoFile(id: string, variant: 'white' | 'grey'): string {
  const name = id === 'cashless' ? 'Cashless' : id === 'tickets' ? 'Tickets' : 'Fan2Fan';
  return `/logos/CoolCo ${name}_${variant}.svg`;
}

/**
 * Home: one single full-page background image; trapezoids are dark overlays on top.
 * On hover the trapezoid grows (not the image) and is painted with color; image inside shows through with tint.
 */
export function Home(): JSX.Element {
  const [desktopHover, setDesktopHover] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselPaintedIndex, setCarouselPaintedIndex] = useState(-1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const section = MOBILE_SECTIONS[carouselIndex];
    if (section.comingSoon) {
      setCarouselPaintedIndex(-1);
      return;
    }
    setCarouselPaintedIndex(-1);
    const t = setTimeout(() => {
      setCarouselPaintedIndex(carouselIndex);
    }, CAROUSEL_PAINT_DELAY_MS);
    return () => clearTimeout(t);
  }, [carouselIndex]);

  const goToSlide = useCallback((index: number) => {
    setCarouselIndex(index);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      setCarouselIndex((prev) => Math.min(prev + 1, MOBILE_SECTIONS.length - 1));
    } else if (diff < -50) {
      setCarouselIndex((prev) => Math.max(prev - 1, 0));
    }
  }, []);

  return (
    <main className="relative min-h-screen w-full flex flex-col" role="main">
      {/* Content area: full viewport on desktop so image takes entire screen; footer overlays bottom. */}
      <div className="relative min-h-screen flex-1">
        {/* Desktop: ONE full-screen background; 4 layers. */}
        <section
          className="absolute inset-0 hidden lg:block lg:overflow-hidden bg-[#0f172a]"
          aria-label="Secciones principales"
        >
          {/* Layer 1: single BG image */}
          <div className="absolute inset-0 bg-coolco-full pointer-events-none" aria-hidden />

          {/* Layer 2: trapezoidal dark/color overlays — pointer-events:none, active gets z-index 20 */}
          {DESKTOP_SECTIONS.map((section, i) => {
            const isHovered = desktopHover === i && !section.comingSoon;
            const origin = TRAPEZOID_ORIGINS[i];
            return (
              <span
                key={`overlay-${section.id}`}
                className="absolute inset-0 pointer-events-none transition-[transform,background-color] duration-500 ease-out"
                aria-hidden
                style={{
                  clipPath: TRAPEZOID_CLIPS[i],
                  transform: isHovered ? 'scale(1.5, 1)' : 'scale(1, 1)',
                  transformOrigin: origin,
                  backgroundColor: isHovered ? 'transparent' : TRAPEZOID_REST_BG[i],
                  zIndex: isHovered ? 20 : 1,
                }}
              >
                {isHovered && (
                  <>
                    <span
                      className="absolute inset-0 bg-coolco-full-active pointer-events-none"
                      style={{ transform: 'scale(0.6667, 1)', transformOrigin: origin }}
                      aria-hidden
                    />
                    <span
                      className={`absolute inset-0 pointer-events-none ${section.hoverClass}`}
                      aria-hidden
                    />
                  </>
                )}
              </span>
            );
          })}

          {/* Layer 3: transparent hover-detection columns (z-index 5, below logos) */}
          <div className="absolute inset-0 flex" style={{ zIndex: 5 }} aria-hidden>
            {DESKTOP_SECTIONS.map((section, i) => (
              <div
                key={`zone-${section.id}`}
                className="flex-1 h-full"
                onMouseEnter={() => setDesktopHover(i)}
                onMouseLeave={() => setDesktopHover(null)}
              />
            ))}
          </div>

          {/* Layer 4: logo links — absolutely positioned, animate to center of active trapezoid. */}
          {DESKTOP_SECTIONS.map((section, i) => {
            const isHovered = desktopHover === i && !section.comingSoon;
            const variant = section.comingSoon ? 'grey' : 'white';
            const linkProps = section.external
              ? { href: section.path, target: '_blank' as const, rel: 'noopener noreferrer' }
              : { href: section.path };
            return (
              <a
                key={section.id}
                {...linkProps}
                className="absolute flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-white"
                style={{
                  left: isHovered ? TRAPEZOID_LOGO_HOVER[i] : TRAPEZOID_LOGO_REST[i],
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  transition: 'left 500ms ease-out',
                  zIndex: isHovered ? 25 : 15,
                }}
                onMouseEnter={() => setDesktopHover(i)}
                onMouseLeave={() => setDesktopHover(null)}
              >
                {section.comingSoon && (
                  <span className="self-start mb-1 text-sm font-semibold text-gray-400">
                    Próximamente
                  </span>
                )}
                <img
                  src={logoFile(section.id, variant)}
                  alt={`CoolCo ${section.label}`}
                  style={{ width: 'clamp(100px, 14vw, 280px)', height: 'auto' }}
                  className="object-contain"
                />
              </a>
            );
          })}
        </section>

        {/* Mobile: full-screen carousel with swipe and 1s activation delay */}
        <section
          className="relative lg:hidden w-full h-screen overflow-hidden"
          aria-label="Carrusel de secciones"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
          >
            {MOBILE_SECTIONS.map((section, i) => {
              const isActive = carouselPaintedIndex === i && !section.comingSoon;
              return (
                <div key={section.id} className="relative w-full h-full shrink-0">
                  {/* BG layers: dark base → active colorful (fades in) → overlays */}
                  <div className="absolute inset-0 bg-coolco-full" />
                  <div
                    className="absolute inset-0 bg-coolco-full-active transition-opacity duration-700"
                    style={{ opacity: isActive ? 1 : 0 }}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(120,30,40,0.45) 0%, rgba(80,20,30,0.5) 100%)',
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.65)',
                      opacity: isActive ? 0 : 1,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full px-12">
                    <a
                      href={section.path}
                      target={section.external ? '_blank' : undefined}
                      rel={section.external ? 'noopener noreferrer' : undefined}
                      className="flex flex-col items-start"
                    >
                      {section.comingSoon && (
                        <span className="mb-1 text-sm font-semibold text-gray-400">
                          Próximamente
                        </span>
                      )}
                      <img
                        src={logoFile(section.id, 'white')}
                        alt={`CoolCo ${section.label}`}
                        className="w-52 h-auto object-contain"
                      />
                    </a>
                    {!section.comingSoon && (
                      <a
                        href={section.path}
                        target={section.external ? '_blank' : undefined}
                        rel={section.external ? 'noopener noreferrer' : undefined}
                        className={`mt-8 w-full max-w-[280px] py-3 rounded-sm text-center font-semibold text-base transition-all duration-500 ${
                          isActive ? 'bg-white text-[#8b2040]' : 'border-2 border-white text-white'
                        }`}
                      >
                        Ingresar
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left arrow */}
          {carouselIndex > 0 && (
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2"
              onClick={() => goToSlide(carouselIndex - 1)}
              aria-label="Anterior"
            >
              <img src="/images/left-arrow.svg" alt="" className="w-4 h-auto" />
            </button>
          )}

          {/* Right arrow */}
          {carouselIndex < MOBILE_SECTIONS.length - 1 && (
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2"
              onClick={() => goToSlide(carouselIndex + 1)}
              aria-label="Siguiente"
            >
              <img src="/images/right-arrow.svg" alt="" className="w-4 h-auto" />
            </button>
          )}
        </section>
      </div>

      {/* Footer: always on top of all trapezoid layers (z-50) */}
      <footer
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-3 py-6 text-white"
        style={{ zIndex: 50 }}
        role="contentinfo"
      >
        <div className="flex items-center justify-center gap-6" aria-label="Redes sociales">
          <a
            href="https://www.instagram.com/coolco.tickets"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label="Instagram"
          >
            <img src="/images/ig-icon.svg" alt="" className="h-7 w-7" />
          </a>
          <a
            href="https://ar.linkedin.com/company/be-coolco"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label="LinkedIn"
          >
            <img src="/images/in-icon.svg" alt="" className="h-7 w-7" />
          </a>
        </div>
        <p className="text-sm">© Copyright, 2026 Proyecto Florida S.A</p>
      </footer>
    </main>
  );
}
