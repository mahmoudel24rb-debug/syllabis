'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Check, Loading02, Stars01 } from '@untitledui/icons'
import { Button } from '@/components/base/buttons/button'
import type { ArborescenceNode } from '@/types/formation'

type Props = {
  arborescence: ArborescenceNode
  sigle: string
  rncp: string
  codeTitre: string
  ccpsCount: number
  competencesCount: number
}

function countByLevel(node: ArborescenceNode, level: ArborescenceNode['niveau']): number {
  if (node.niveau === level) return 1
  return (node.children ?? []).reduce((a, c) => a + countByLevel(c, level), 0)
}

// Compteur count-up animé via requestAnimationFrame
function AnimatedCount({ target, durationMs }: { target: number; durationMs: number }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3)
      setV(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs])
  return <>{v}</>
}

// Badge loader IA (spinner + texte) — sticky en haut du panel pendant les transitions
function LoaderBadge({ label }: { label: string | null }) {
  return (
    <div className="flex justify-center mb-6 min-h-[44px]">
      <AnimatePresence mode="wait">
        {label && (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-semibold shadow-sm"
          >
            <Loading02 className="animate-spin size-4 shrink-0" aria-hidden="true" />
            <span>{label}</span>
            {/* Dots IA animés */}
            <span className="inline-flex gap-0.5" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="size-1 rounded-full bg-brand-600"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18 }}
                />
              ))}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function InteractiveArborescenceBuilder({
  arborescence,
  sigle,
  rncp,
  codeTitre,
  ccpsCount,
  competencesCount,
}: Props) {
  const [phase, setPhase] = useState<'idle' | 'building'>('idle')

  // Phase flags (révélation progressive)
  const [showRoot, setShowRoot] = useState(false)
  const [showCcps, setShowCcps] = useState(false)
  const [showModules, setShowModules] = useState(false)
  const [showSeqCount, setShowSeqCount] = useState(false)
  const [showSceCount, setShowSceCount] = useState(false)
  const [showFinal, setShowFinal] = useState(false)

  // Loader textuel affiché entre chaque étape
  const [loadingStep, setLoadingStep] = useState<string | null>(null)

  const blocs = arborescence.children ?? []
  const sequencesTotal = countByLevel(arborescence, 'sequence')
  const seancesTotal = countByLevel(arborescence, 'seance')
  const modulesTotal = blocs.reduce((a, b) => a + (b.children?.length ?? 0), 0)

  useEffect(() => {
    if (phase !== 'building') return
    const timers: number[] = []

    // T+0 — loader fiche RNCP
    setLoadingStep(`Lecture de la fiche ${rncp}…`)

    // T+0.9 — root apparaît
    timers.push(window.setTimeout(() => {
      setLoadingStep(null)
      setShowRoot(true)
    }, 900))

    // T+1.4 — loader identification blocs
    timers.push(window.setTimeout(() => {
      setLoadingStep(`Identification des ${ccpsCount} blocs de compétences (CCP)…`)
    }, 1400))

    // T+2.3 — CCPs apparaissent
    timers.push(window.setTimeout(() => {
      setLoadingStep(null)
      setShowCcps(true)
    }, 2300))

    // T+2.9 — loader modules
    timers.push(window.setTimeout(() => {
      setLoadingStep(`Construction des ${modulesTotal} modules pédagogiques…`)
    }, 2900))

    // T+3.7 — modules apparaissent
    timers.push(window.setTimeout(() => {
      setLoadingStep(null)
      setShowModules(true)
    }, 3700))

    // T+4.8 — loader séquences
    timers.push(window.setTimeout(() => {
      setLoadingStep(`Découpage en ${sequencesTotal} séquences…`)
    }, 4800))

    // T+5.5 — compteur séquences révélé
    timers.push(window.setTimeout(() => {
      setLoadingStep(null)
      setShowSeqCount(true)
    }, 5500))

    // T+6.0 — loader séances
    timers.push(window.setTimeout(() => {
      setLoadingStep(`Génération des ${seancesTotal} séances FOAD interactives…`)
    }, 6000))

    // T+6.8 — compteur séances révélé
    timers.push(window.setTimeout(() => {
      setLoadingStep(null)
      setShowSceCount(true)
    }, 6800))

    // T+7.4 — bandeau final + CTA
    timers.push(window.setTimeout(() => setShowFinal(true), 7400))

    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [phase, rncp, ccpsCount, modulesTotal, sequencesTotal, seancesTotal])

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-sm font-semibold text-brand-600 mb-3">Aperçu Syllabis</p>
        <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900 text-balance">
          Voyez Syllabis générer l'arborescence du TP {sigle} en direct
        </h2>
        <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Cliquez : l'IA construit la hiérarchie pédagogique complète depuis la fiche RNCP — fiche → blocs (CCP) → modules → séquences → séances.
        </p>
      </div>

      <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 sm:p-10 shadow-sm overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {phase === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12 sm:py-20"
            >
              <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-brand-600 text-white mb-6 shadow-lg">
                <Stars01 className="size-8" aria-hidden="true" />
              </div>
              <p className="text-md text-neutral-600 mb-2">
                Source : fiche officielle {rncp} (France Compétences)
              </p>
              <p className="text-lg sm:text-xl text-neutral-900 font-medium mb-8 max-w-xl mx-auto">
                Lancez la génération du mindmap pédagogique :{' '}
                <span className="font-semibold text-brand-700">
                  {ccpsCount} blocs (CCP) · {modulesTotal} modules · {sequencesTotal} séquences · {seancesTotal} séances.
                </span>
              </p>
              <button
                type="button"
                onClick={() => setPhase('building')}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-md font-semibold bg-brand-600 text-white shadow-sm hover:bg-brand-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 whitespace-nowrap"
              >
                <Stars01 className="size-5 shrink-0" aria-hidden="true" />
                Générer l'arborescence avec l'IA
              </button>
            </motion.div>
          )}

          {phase === 'building' && (
            <motion.div
              key="building"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Loader badge sticky en haut */}
              <LoaderBadge label={loadingStep} />

              {/* Root node : RNCP / TP code */}
              <AnimatePresence>
                {showRoot && (
                  <motion.div
                    key="root"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                    className="flex justify-center"
                  >
                    <div className="inline-flex flex-col items-center rounded-2xl border-2 border-brand-600 bg-brand-600 text-white px-6 py-3 shadow-lg">
                      <span className="text-xs font-semibold opacity-80 uppercase tracking-wide">Fiche RNCP</span>
                      <span className="text-xl sm:text-2xl font-bold tracking-tight">{rncp}</span>
                      <span className="text-xs opacity-80 mt-0.5">{codeTitre}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Branche root → CCPs */}
              <AnimatePresence>
                {showCcps && (
                  <motion.div
                    key="branch-root"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    style={{ transformOrigin: 'top' }}
                    className="mx-auto w-px h-8 bg-brand-300 my-2"
                  />
                )}
              </AnimatePresence>

              {/* Grid Blocs/CCPs — grille adaptative au nombre de blocs.
                  Avant : grid-cols-2 lg:grid-cols-4 hardcodé pour FPA (4 blocs)
                  → NTC (2) et AEPE (3) collaient à gauche sur 4 col.
                  Maintenant : nb de colonnes égal au nb de blocs jusqu'à 6,
                  avec max-width + mx-auto pour centrer la grille quand elle
                  est plus étroite que le container. Tailwind exige les
                  classes en clair (no concat dynamique) pour le purge JIT. */}
              <AnimatePresence>
                {showCcps && (
                  <motion.div
                    key="ccps-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`grid gap-4 sm:gap-6 mt-2 mx-auto ${
                      blocs.length === 1 ? 'grid-cols-1 max-w-xs' :
                      blocs.length === 2 ? 'grid-cols-2 max-w-2xl' :
                      blocs.length === 3 ? 'grid-cols-1 sm:grid-cols-3 max-w-4xl' :
                      blocs.length === 4 ? 'grid-cols-2 lg:grid-cols-4' :
                      blocs.length === 5 ? 'grid-cols-2 lg:grid-cols-5' :
                      'grid-cols-2 lg:grid-cols-6'
                    }`}
                  >
                    {blocs.map((bloc, i) => {
                      const modules = bloc.children ?? []
                      const ccpModulesCount = modules.length
                      const ccpSequences = countByLevel(bloc, 'sequence')
                      const ccpSeances = countByLevel(bloc, 'seance')
                      return (
                        <div key={i} className="flex flex-col items-center">
                          {/* Bloc / CCP node */}
                          <motion.div
                            initial={{ opacity: 0, y: -16, scale: 0.85 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: i * 0.12,
                              ease: [0.34, 1.56, 0.64, 1],
                            }}
                            className="w-full rounded-xl border-2 border-brand-300 bg-white px-3 py-2.5 text-center shadow-sm"
                          >
                            <p className="text-lg font-bold text-brand-700">Bloc {i + 1}</p>
                            <p className="text-[10px] uppercase tracking-wide text-brand-500 font-semibold">
                              = CCP {i + 1}
                            </p>
                            <p className="text-xs font-medium text-neutral-700 leading-snug mt-1.5">
                              {bloc.intitule.replace(/^Bloc \d+ — /, '')}
                            </p>
                            <p className="text-[10px] text-neutral-500 mt-2 pt-1.5 border-t border-neutral-100">
                              {ccpModulesCount} modules · {ccpSequences} séq. · {ccpSeances} séances
                            </p>
                          </motion.div>

                          {/* Branche CCP → modules */}
                          <AnimatePresence>
                            {showModules && (
                              <motion.div
                                key="branch-mod"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.25, delay: 0.05 }}
                                style={{ transformOrigin: 'top' }}
                                className="w-px h-4 bg-brand-200"
                              />
                            )}
                          </AnimatePresence>

                          {/* Modules stack */}
                          <div className="w-full space-y-1.5">
                            <AnimatePresence>
                              {showModules &&
                                modules.map((mod, j) => {
                                  const sequences = mod.children ?? []
                                  const modSeq = sequences.length
                                  const modSce = countByLevel(mod, 'seance')
                                  return (
                                    <motion.details
                                      key={j}
                                      initial={{ opacity: 0, x: -8 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.28,
                                        delay: i * 0.08 + j * 0.06,
                                      }}
                                      className="group rounded-lg border border-neutral-200 bg-white text-xs overflow-hidden"
                                    >
                                      <summary className="cursor-pointer list-none px-3 py-2 hover:bg-brand-50 transition-colors">
                                        <div className="flex items-start justify-between gap-2">
                                          <p className="font-medium text-neutral-900 leading-snug flex-1">
                                            {mod.intitule.replace(/^Module \d+\.\d+ — /, '')}
                                          </p>
                                          <svg
                                            className="size-3 shrink-0 mt-0.5 text-neutral-400 transition-transform group-open:rotate-180"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            aria-hidden="true"
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                          </svg>
                                        </div>
                                        <p className="text-neutral-500 text-[10px] mt-0.5">
                                          {modSeq} séquence{modSeq > 1 ? 's' : ''} · {modSce} séance{modSce > 1 ? 's' : ''}
                                        </p>

                                        {/* Dots séquences animés (apparaissent en phase 'showSeqCount') */}
                                        <AnimatePresence>
                                          {showSeqCount && (
                                            <motion.div
                                              key="seq-dots"
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 1 }}
                                              className="flex flex-wrap gap-2 mt-2"
                                            >
                                              {sequences.map((seq, k) => {
                                                const seances = seq.children ?? []
                                                return (
                                                  <div
                                                    key={k}
                                                    className="flex flex-col items-center gap-0.5"
                                                    title={seq.intitule}
                                                  >
                                                    <motion.span
                                                      initial={{ scale: 0 }}
                                                      animate={{ scale: 1 }}
                                                      transition={{
                                                        duration: 0.2,
                                                        delay: 0.05 + k * 0.08,
                                                      }}
                                                      className="size-2 rounded-full bg-brand-500 shadow-sm"
                                                    />
                                                    {/* Dots séances sous chaque dot séquence */}
                                                    <AnimatePresence>
                                                      {showSceCount && (
                                                        <motion.div
                                                          key="sce"
                                                          initial={{ opacity: 0 }}
                                                          animate={{ opacity: 1 }}
                                                          className="flex flex-col gap-0.5 items-center"
                                                        >
                                                          {seances.map((sce, m) => (
                                                            <motion.span
                                                              key={m}
                                                              initial={{ scale: 0 }}
                                                              animate={{ scale: 1 }}
                                                              transition={{
                                                                duration: 0.15,
                                                                delay: 0.05 + k * 0.05 + m * 0.04,
                                                              }}
                                                              className="size-1 rounded-full bg-brand-300"
                                                              title={sce.intitule}
                                                            />
                                                          ))}
                                                        </motion.div>
                                                      )}
                                                    </AnimatePresence>
                                                  </div>
                                                )
                                              })}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </summary>

                                      {/* Liste détaillée révélée au click (open=true) */}
                                      <div className="px-3 pb-3 pt-1 border-t border-neutral-100 bg-neutral-50/50">
                                        <ul className="space-y-2 mt-2">
                                          {sequences.map((seq, k) => {
                                            const seances = seq.children ?? []
                                            return (
                                              <li key={k}>
                                                <p className="text-[10px] font-semibold text-brand-700 flex items-start gap-1.5">
                                                  <span className="inline-block size-1.5 rounded-full bg-brand-500 mt-1 shrink-0" />
                                                  <span>{seq.intitule.replace(/^Séquence \d+\.\d+\.\d+ — /, '')}</span>
                                                </p>
                                                {seances.length > 0 && (
                                                  <ul className="mt-1 ml-3.5 space-y-0.5">
                                                    {seances.map((sce, m) => (
                                                      <li
                                                        key={m}
                                                        className="text-[10px] text-neutral-600 leading-snug flex items-start gap-1.5"
                                                      >
                                                        <span className="inline-block size-1 rounded-full bg-brand-300 mt-1.5 shrink-0" />
                                                        <span>
                                                          {sce.intitule.replace(/^Séance \d+\.\d+\.\d+\.\d+ — /, '')}
                                                        </span>
                                                      </li>
                                                    ))}
                                                  </ul>
                                                )}
                                              </li>
                                            )
                                          })}
                                        </ul>
                                      </div>
                                    </motion.details>
                                  )
                                })}
                            </AnimatePresence>
                          </div>
                        </div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Compteurs récap */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
                <StatBadge label="Blocs (CCP)" target={ccpsCount} show={showCcps} durationMs={500} />
                <StatBadge label="Modules" target={modulesTotal} show={showModules} durationMs={700} />
                <StatBadge label="Séquences" target={sequencesTotal} show={showSeqCount} durationMs={700} />
                <StatBadge label="Séances" target={seancesTotal} show={showSceCount} durationMs={900} />
              </div>

              {/* Bandeau final + CTA */}
              <AnimatePresence>
                {showFinal && (
                  <motion.div
                    key="final"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-10 flex flex-col items-center gap-3 text-center"
                  >
                    <span className="inline-flex items-center gap-2 text-emerald-700 font-semibold">
                      <span className="inline-flex items-center justify-center size-6 rounded-full bg-emerald-500 text-white">
                        <Check className="size-4" aria-hidden="true" />
                      </span>
                      Arborescence générée en 8 heures
                      <span className="text-neutral-500 font-normal text-sm hidden sm:inline">
                        · méthode traditionnelle : <span className="line-through">80 heures</span>
                      </span>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showFinal && (
                  <motion.div
                    key="cta"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-6 text-center"
                  >
                    <Button size="xl" href="/essai-gratuit">
                      <span className="inline-flex items-center gap-2 whitespace-nowrap">
                        Continuer sur Syllabis
                        <ArrowRight className="size-5 shrink-0 inline-block" aria-hidden="true" />
                      </span>
                    </Button>
                    <p className="mt-3 text-sm text-neutral-500">
                      14 jours d'essai gratuit · Sans carte bancaire · Compte créé en 30 secondes.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Compteur statistique avec animation count-up
function StatBadge({
  label,
  target,
  show,
  durationMs,
}: {
  label: string
  target: number
  show: boolean
  durationMs: number
}) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-4 text-center shadow-sm transition-opacity duration-300" style={{ opacity: show ? 1 : 0.35 }}>
      <p className="text-3xl sm:text-4xl font-bold text-brand-700 tabular-nums">
        {show ? <AnimatedCount target={target} durationMs={durationMs} /> : 0}
      </p>
      <p className="text-xs uppercase tracking-wide text-neutral-500 font-semibold mt-1">
        {label}
      </p>
    </div>
  )
}
